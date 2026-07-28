import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { InvestorForm } from "@/components/off-market/InvestorForm";
import { EigentuemerForm } from "@/components/off-market/EigentuemerForm";

export const metadata: Metadata = {
  title: "Off-Market-Zugang",
  description:
    "Diskreter Zugang zu Berliner Off-Market-Immobilien — als Investor mit Suchprofil oder als Eigentümer mit vertraulichem Angebot.",
};

export default function OffMarketPage() {
  return (
    <>
      <PageHeader
        label="Off-Market"
        titel="Zugang, den es öffentlich nicht gibt."
        text="Die besten Objekte wechseln den Eigentümer, bevor sie ein Portal erreichen. Zwei Wege führen dorthin."
      />

      <section id="investor" className="scroll-mt-24 bg-background px-6 py-section lg:px-12">
        <div className="mx-auto max-w-3xl">
          <SectionLabel className="mb-4">Für Investoren und Käufer</SectionLabel>
          <h2 className="mb-5 font-serif text-headline font-normal text-foreground">Ich suche</h2>
          <p className="mb-12 max-w-xl font-sans text-base font-light leading-relaxed text-foreground/70">
            Hinterlegen Sie Ihr Suchprofil. Passt ein Objekt, sprechen wir mit Ihnen —
            bevor der Markt es tut. Ihre Angaben bleiben vertraulich.
          </p>
          <InvestorForm />
        </div>
      </section>

      <div className="px-6">
        <GoldDivider className="mx-auto max-w-3xl" />
      </div>

      <section id="eigentuemer" className="scroll-mt-24 bg-background px-6 py-section lg:px-12">
        <div className="mx-auto max-w-3xl">
          <SectionLabel className="mb-4">Für Eigentümer</SectionLabel>
          <h2 className="mb-5 font-serif text-headline font-normal text-foreground">Ich biete an</h2>
          <p className="mb-12 max-w-xl font-sans text-base font-light leading-relaxed text-foreground/70">
            Ihr Objekt erreicht ausgewählte Käufer — ohne Portal, ohne Öffentlichkeit.
            Diskret bis zum Notartermin.
          </p>
          <EigentuemerForm />
        </div>
      </section>
    </>
  );
}
