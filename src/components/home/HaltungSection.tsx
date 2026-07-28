import { FadeIn } from "@/components/ui/FadeIn";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function HaltungSection() {
  return (
    <section className="bg-background px-6 py-section text-center lg:px-12">
      <FadeIn>
        <p className="text-balance font-serif text-headline font-normal text-foreground">
          Wir vermitteln keine Immobilien.
          <br />
          Wir öffnen Türen.
        </p>
      </FadeIn>
      <GoldDivider className="mx-auto my-10 w-28" />
      <FadeIn delay={0.1}>
        <p className="text-balance font-serif text-2xl font-normal text-foreground/80 lg:text-3xl">
          Vom ersten Objekt bis zum Portfolio.
        </p>
      </FadeIn>
    </section>
  );
}
