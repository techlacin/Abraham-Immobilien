import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { KontaktBanner } from "@/components/home/KontaktBanner";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Brokerage, Advisory, Development und Portfolio-Aufbau — vier Felder, ein Anspruch. Abraham Immobilien Advisors, Berlin.",
};

const leistungen = [
  {
    titel: "Brokerage",
    text: "An- und Verkauf von Wohn- und Geschäftshäusern in Berlin. Wir führen Eigentümer und Käufer direkt zusammen — vertraulich, ohne Umwege, ohne Öffentlichkeit. Vom Erstgespräch bis zur Schlüsselübergabe bleibt Ihr Ansprechpartner derselbe.",
  },
  {
    titel: "Advisory",
    text: "Bewertung, Strukturierung und Begleitung von Transaktionen — von der ersten Analyse bis zur Beurkundung. Wir prüfen, was andere übersehen, und sagen auch dann klar unsere Meinung, wenn sie unbequem ist.",
  },
  {
    titel: "Development",
    text: "Wir erkennen Potenzial, bevor es sichtbar wird. Begleitung von Projektentwicklungen in allen Phasen — von der Grundstückssicherung über Baurecht bis zur Vermarktung.",
  },
  {
    titel: "Portfolio-Aufbau",
    text: "Schrittweiser Aufbau von Immobilienbeständen. Ruhig, langfristig, mit Substanz. Wir begleiten den Weg vom ersten Objekt bis zum strukturierten Bestand — in Ihrem Tempo.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        label="Leistungen"
        titel="Vier Felder. Ein Anspruch."
        text="Jedes Mandat beginnt mit Zuhören. Danach entscheiden wir gemeinsam, welcher Weg der richtige ist."
      />

      <section className="bg-background px-6 py-section lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col">
          {leistungen.map((l, i) => (
            <FadeIn key={l.titel}>
              <article
                className={`grid grid-cols-1 gap-4 py-14 md:grid-cols-[240px_1fr] md:gap-12 ${
                  i > 0 ? "border-t border-grey/20" : ""
                }`}
              >
                <h2 className="font-serif text-3xl font-normal text-foreground">{l.titel}</h2>
                <p className="font-sans text-base font-light leading-loose text-foreground/70">
                  {l.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <KontaktBanner />
    </>
  );
}
