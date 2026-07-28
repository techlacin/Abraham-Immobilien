import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

function IconSuche() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
      <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="#C9A227" strokeWidth="1.2" />
      <polygon points="20,11 29,20 20,29 11,20" fill="none" stroke="#D4AF5A" strokeWidth="1" />
    </svg>
  );
}

function IconAngebot() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
      <polygon points="6,38 6,14 20,2 20,38" fill="none" stroke="#C9A227" strokeWidth="1.2" />
      <polygon points="20,38 20,10 34,20 34,38" fill="none" stroke="#D4AF5A" strokeWidth="1" />
    </svg>
  );
}

export function ZugangTeaser() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1fr_1px_1fr]">
        <FadeIn className="px-6 py-20 lg:px-16 lg:py-28">
          <IconSuche />
          <h2 className="mb-5 mt-8 font-serif text-3xl font-normal lg:text-4xl">Ich suche</h2>
          <p className="max-w-md font-sans text-[15px] font-light leading-relaxed text-background/60">
            Zugang zu Objekten, die nie öffentlich angeboten werden. Wir sprechen mit Ihnen,
            bevor der Markt es tut.
          </p>
          <div className="mt-9">
            <Button href="/off-market#investor" variant="outline">
              Suchprofil hinterlegen
            </Button>
          </div>
        </FadeIn>

        {/* Vertikale Gold-Trennlinie (Desktop) / horizontale Linie (Mobile) */}
        <div
          aria-hidden
          className="mx-6 h-px bg-gold/45 lg:mx-0 lg:h-auto lg:w-px lg:bg-gradient-to-b lg:from-transparent lg:via-gold lg:to-transparent"
        />

        <FadeIn className="px-6 py-20 lg:px-16 lg:py-28" delay={0.1}>
          <IconAngebot />
          <h2 className="mb-5 mt-8 font-serif text-3xl font-normal lg:text-4xl">Ich biete an</h2>
          <p className="max-w-md font-sans text-[15px] font-light leading-relaxed text-background/60">
            Ihr Objekt erreicht ausgewählte Käufer — ohne Portal, ohne Öffentlichkeit.
            Diskret bis zum Notartermin.
          </p>
          <div className="mt-9">
            <Button href="/off-market#eigentuemer" variant="outline">
              Vertraulich anfragen
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
