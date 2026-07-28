import { NextResponse } from "next/server";
import { offMarketSchema } from "@/lib/validation";
import { sendeAnfrage } from "@/lib/email/resend";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot — siehe /api/contact
  const honeypot = (body as Record<string, unknown>)?.firma_webseite;
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = offMarketSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Bitte prüfen Sie Ihre Angaben." },
      { status: 422 },
    );
  }

  const daten = parsed.data;
  const istInvestor = daten.formType === "investor";

  try {
    await sendeAnfrage({
      betreff: istInvestor
        ? `Off-Market-Suchprofil von ${daten.name}`
        : `Off-Market-Angebot von ${daten.name}`,
      absenderEmail: daten.email,
      absenderName: daten.name,
      zeilen: [
        ["Typ", istInvestor ? "Investor / Käufer" : "Eigentümer"],
        ["Name", daten.name],
        ["E-Mail", daten.email],
        ["Telefon", daten.telefon],
        ...(daten.formType === "investor"
          ? ([
              ["Unternehmen", daten.unternehmen],
              ["Objekttyp", daten.objekttyp],
              ["Bezirk", daten.bezirk],
              ["Budget", daten.budget],
              ["Volumen", daten.volumen],
            ] as Array<[string, string | undefined]>)
          : ([
              ["Objekttyp", daten.objekttyp],
              ["Bezirk", daten.bezirk],
              ["Geschätzter Wert", daten.wert],
            ] as Array<[string, string | undefined]>)),
        ["Nachricht", daten.nachricht],
      ],
    });
  } catch (error) {
    console.error("[api/off-market]", error);
    return NextResponse.json(
      { ok: false, error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
