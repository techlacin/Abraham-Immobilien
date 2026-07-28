import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { KontaktForm } from "@/components/kontakt/KontaktForm";
import { StandortKarteProvider } from "@/components/kontakt/StandortKarte";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Abraham Immobilien Advisors GmbH — Kurfürstendamm 15, 10719 Berlin. Das erste Gespräch ist der kürzeste Weg.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        label="Kontakt"
        titel="Das erste Gespräch ist der kürzeste Weg."
        text="Schreiben Sie uns oder rufen Sie an — wir melden uns in der Regel innerhalb eines Werktags."
      />

      <section className="bg-background px-6 py-section lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[1fr_420px]">
          <div className="max-w-2xl">
            <SectionLabel className="mb-4">Nachricht</SectionLabel>
            <h2 className="mb-10 font-serif text-headline font-normal text-foreground">
              Schreiben Sie uns.
            </h2>
            <KontaktForm />
          </div>

          <aside className="flex flex-col gap-10">
            <div>
              <SectionLabel className="mb-4">Adresse</SectionLabel>
              <address className="font-sans text-base font-light not-italic leading-loose text-foreground/75">
                Abraham Immobilien Advisors GmbH
                <br />
                Kurfürstendamm 15
                <br />
                10719 Berlin
              </address>
            </div>
            <div>
              <SectionLabel className="mb-4">Direkt</SectionLabel>
              <a
                href="mailto:info@abraham-immobilien.de"
                className="block py-0.5 font-sans text-base font-light text-foreground/75 transition-all duration-200 hover:text-gold-dark"
              >
                info@abraham-immobilien.de
              </a>
              <a
                href="tel:+49301234560"
                className="block py-0.5 font-sans text-base font-light text-foreground/75 transition-all duration-200 hover:text-gold-dark"
              >
                +49 30 123 456 0
              </a>
            </div>
            <div className="min-h-96 flex-1 border border-grey/25">
              <StandortKarteProvider />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
