import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Hintergrund: echte Berliner Architektur-Fotografie, S/W */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="[Foto: Berliner Fassade, S/W — Gründerzeit-Detail, Streiflicht]"
          dark
          className="h-full w-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/25 to-foreground/60"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-12">
        <div className="mb-28 mt-auto max-w-3xl lg:mb-32">
          <h1 className="text-balance font-serif text-display font-normal text-background">
            Berliner Immobilien.
            <br />
            Diskret. Direkt. Verlässlich.
          </h1>
          <p className="mt-5 font-sans text-base font-light tracking-wide text-background/65 lg:text-lg">
            Off-Market-Zugang für Investoren, Eigentümer und Family Offices.
          </p>
          <div className="mt-9">
            <Button href="/kontakt" variant="on-photo">
              Gespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll-Indicator */}
      <div aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/55">
        <svg width="14" height="8" viewBox="0 0 14 8" className="animate-pulse">
          <polyline points="1,1 7,7 13,1" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
