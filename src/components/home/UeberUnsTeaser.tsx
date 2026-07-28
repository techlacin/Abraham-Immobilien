import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function UeberUnsTeaser() {
  return (
    <section className="bg-background px-6 pb-section lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[460px_1fr] lg:gap-20">
        <FadeIn>
          <ImagePlaceholder
            label="[Foto: Team / Person, nahbar — natürliches Licht, kein Anzug-Zwang]"
            className="aspect-[4/5] w-full"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionLabel className="mb-4">Über uns</SectionLabel>
          <h2 className="mb-6 font-serif text-headline font-normal text-foreground">
            Wir kennen Berlin.
            <br />
            Straße für Straße.
          </h2>
          <p className="max-w-xl font-sans text-base font-light leading-loose text-foreground/70">
            Hinter Abraham Immobilien stehen Menschen, die diese Stadt seit Jahren begleiten —
            als Berater, als Käufer, als Nachbarn. Wir arbeiten persönlich, direkt und ohne
            Umwege.
          </p>
          <Link
            href="/ueber-uns"
            className="mt-8 inline-block border-b border-gold pb-1 font-sans text-xs font-medium uppercase tracking-[0.16em] text-foreground transition-all duration-200 hover:text-gold-dark"
          >
            Unser Team →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
