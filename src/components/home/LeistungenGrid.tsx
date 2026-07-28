import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const leistungen = [
  {
    titel: "Brokerage",
    text: "An- und Verkauf von Wohn- und Geschäftshäusern in Berlin. Direkt, vertraulich, ohne Umwege.",
  },
  {
    titel: "Advisory",
    text: "Bewertung, Strukturierung und Begleitung von Transaktionen — von der ersten Analyse bis zur Beurkundung.",
  },
  {
    titel: "Development",
    text: "Wir erkennen Potenzial, bevor es sichtbar wird. Begleitung von Projektentwicklungen in allen Phasen.",
  },
  {
    titel: "Portfolio-Aufbau",
    text: "Schrittweiser Aufbau von Immobilienbeständen. Ruhig, langfristig, mit Substanz.",
  },
];

export function LeistungenGrid() {
  return (
    <section className="bg-background px-6 py-section lg:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-14">
          <SectionLabel className="mb-4">Leistungen</SectionLabel>
          <h2 className="font-serif text-headline font-normal text-foreground">
            Vier Felder. Ein Anspruch.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leistungen.map((l, i) => (
            <FadeIn key={l.titel} delay={i * 0.06}>
              <div className="h-full border border-grey/25 border-l-2 border-l-grey/25 bg-background px-7 pb-11 pt-10 transition-all duration-200 hover:border-l-gold">
                <h3 className="mb-4 font-serif text-2xl font-medium text-foreground">{l.titel}</h3>
                <p className="font-sans text-[13.5px] font-light leading-relaxed text-foreground/65">
                  {l.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
