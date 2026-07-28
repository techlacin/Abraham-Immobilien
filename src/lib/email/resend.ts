import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@abraham-immobilien.de";
const FROM = "Abraham Immobilien <noreply@abraham-immobilien.de>";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

interface Anfrage {
  betreff: string;
  zeilen: Array<[string, string | undefined]>;
  absenderEmail: string;
  absenderName: string;
}

/**
 * Leitet eine Anfrage an das Postfach weiter und schickt dem Absender
 * eine kurze Bestätigung. Wirft, wenn der Versand fehlschlägt.
 */
export async function sendeAnfrage({ betreff, zeilen, absenderEmail, absenderName }: Anfrage) {
  const resend = getResend();
  if (!resend) {
    throw new Error("RESEND_API_KEY ist nicht konfiguriert.");
  }

  const text = zeilen
    .filter(([, wert]) => wert && wert.trim().length > 0)
    .map(([feld, wert]) => `${feld}: ${wert}`)
    .join("\n");

  const intern = await resend.emails.send({
    from: FROM,
    to: CONTACT_EMAIL,
    replyTo: absenderEmail,
    subject: betreff,
    text,
  });
  if (intern.error) {
    throw new Error(`E-Mail-Versand fehlgeschlagen: ${intern.error.message}`);
  }

  // Bestätigung an den Absender — Fehler hier brechen die Anfrage nicht ab
  await resend.emails.send({
    from: FROM,
    to: absenderEmail,
    subject: "Ihre Anfrage bei Abraham Immobilien",
    text: [
      `Guten Tag ${absenderName},`,
      "",
      "vielen Dank für Ihre Anfrage. Sie ist bei uns eingegangen und wird vertraulich behandelt.",
      "Wir melden uns in der Regel innerhalb eines Werktags persönlich bei Ihnen.",
      "",
      "Abraham Immobilien Advisors GmbH",
      "Kurfürstendamm 15, 10719 Berlin",
      "info@abraham-immobilien.de",
    ].join("\n"),
  });
}
