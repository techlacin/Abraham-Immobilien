import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

const h2 = "mb-3 mt-12 font-serif text-2xl font-medium text-foreground first:mt-0";
const p = "mb-4 font-sans text-[15px] font-light leading-loose text-foreground/75";

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader label="Rechtliches" titel="Datenschutzerklärung" />
      <section className="bg-background px-6 py-section lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className={h2}>1. Verantwortlicher</h2>
          <p className={p}>
            Abraham Immobilien Advisors GmbH, Kurfürstendamm 15, 10719 Berlin,
            E-Mail: info@abraham-immobilien.de, Telefon: +49 30 123 456 0.
          </p>

          <h2 className={h2}>2. Erhebung und Verarbeitung von Daten</h2>
          <p className={p}>
            Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch
            Informationen in Server-Logfiles gespeichert (IP-Adresse, Datum und Uhrzeit,
            aufgerufene Seite, Browsertyp). Diese Daten dienen der Sicherstellung des
            Betriebs und werden nicht mit anderen Datenquellen zusammengeführt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2 className={h2}>3. Kontakt- und Off-Market-Formulare</h2>
          <p className={p}>
            Wenn Sie uns über ein Formular kontaktieren, verarbeiten wir die von Ihnen
            angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage
            (Art. 6 Abs. 1 lit. b DSGVO). Der Versand erfolgt über den Dienstleister
            Resend (Resend, Inc.). Ihre Daten werden nicht an Dritte weitergegeben und
            gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2 className={h2}>4. Google Analytics</h2>
          <p className={p}>
            Diese Website verwendet Google Analytics 4 (Google Ireland Ltd.) — jedoch nur,
            wenn Sie über den Cookie-Hinweis eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO).
            Die Einwilligung können Sie jederzeit widerrufen, indem Sie die im Browser
            gespeicherte Einstellung löschen. IP-Adressen werden von Google Analytics 4
            nicht gespeichert.
          </p>

          <h2 className={h2}>5. Google Maps</h2>
          <p className={p}>
            Auf der Kontaktseite binden wir Google Maps ein, um unseren Standort
            anzuzeigen. Dabei können Daten an Google übertragen werden. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer verständlichen Anfahrt).
          </p>

          <h2 className={h2}>6. Ihre Rechte</h2>
          <p className={p}>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO).
            Außerdem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren —
            zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
          </p>

          <p className={p}>
            Hinweis: Diese Erklärung ist eine Vorlage und muss vor Veröffentlichung
            rechtlich geprüft werden.
          </p>
        </div>
      </section>
    </>
  );
}
