import { NextResponse } from "next/server";
import { kontaktSchema } from "@/lib/validation";
import { sendeAnfrage } from "@/lib/email/resend";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: Feld „firma_webseite" ist für Menschen unsichtbar.
  // Ist es befüllt, still mit 200 antworten (Spam-Bot merkt nichts).
  const honeypot = (body as Record<string, unknown>)?.firma_webseite;
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = kontaktSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Bitte prüfen Sie Ihre Angaben." },
      { status: 422 },
    );
  }

  const daten = parsed.data;
  try {
    await sendeAnfrage({
      betreff: `Kontaktanfrage von ${daten.name}`,
      absenderEmail: daten.email,
      absenderName: daten.name,
      zeilen: [
        ["Name", daten.name],
        ["E-Mail", daten.email],
        ["Telefon", daten.telefon],
        ["Nachricht", daten.nachricht],
      ],
    });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json(
      { ok: false, error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
