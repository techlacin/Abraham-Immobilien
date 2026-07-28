import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function KontaktBanner() {
  return (
    <section className="bg-foreground px-6 py-section text-center">
      <FadeIn>
        <h2 className="text-balance font-serif text-headline font-normal text-background">
          Das erste Gespräch ist der kürzeste Weg.
        </h2>
        <div className="mt-10">
          <Button href="/kontakt" variant="primary" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
