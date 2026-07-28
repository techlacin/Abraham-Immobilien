import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

const h2 = "mb-3 mt-12 font-serif text-2xl font-medium text-foreground first:mt-0";
const p = "font-sans text-[15px] font-light leading-loose text-foreground/75";

export default function ImpressumPage() {
  return (
    <>
      <PageHeader label="Rechtliches" titel="Impressum" />
      <section className="bg-background px-6 py-section lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className={h2}>Angaben gemäß § 5 DDG</h2>
          <p className={p}>
            Abraham Immobilien Advisors GmbH
            <br />
            Kurfürstendamm 15
            <br />
            10719 Berlin
          </p>

          <h2 className={h2}>Vertreten durch</h2>
          <p className={p}>Geschäftsführung: [Name der Geschäftsführung eintragen]</p>

          <h2 className={h2}>Kontakt</h2>
          <p className={p}>
            Telefon: +49 30 123 456 0
            <br />
            E-Mail: info@abraham-immobilien.de
          </p>

          <h2 className={h2}>Registereintrag</h2>
          <p className={p}>
            Registergericht: Amtsgericht Charlottenburg
            <br />
            Registernummer: [HRB-Nummer eintragen]
          </p>

          <h2 className={h2}>Umsatzsteuer-ID</h2>
          <p className={p}>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr. eintragen]
          </p>

          <h2 className={h2}>Aufsichtsbehörde</h2>
          <p className={p}>
            Erlaubnis nach § 34c GewO, zuständige Behörde: [Bezirksamt eintragen]
          </p>

          <h2 className={h2}>Verantwortlich für den Inhalt</h2>
          <p className={p}>
            [Name eintragen], Anschrift wie oben.
          </p>
        </div>
      </section>
    </>
  );
}
