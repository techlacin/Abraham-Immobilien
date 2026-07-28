import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { KontaktBanner } from "@/components/home/KontaktBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getTeam } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Menschen hinter Abraham Immobilien Advisors — persönlich, direkt, mit Berliner Bodenhaftung.",
};

export default async function UeberUnsPage() {
  const team = await getTeam();

  return (
    <>
      <PageHeader
        label="Über uns"
        titel="Wir kennen Berlin. Straße für Straße."
        text="Hinter Abraham Immobilien stehen Menschen, die diese Stadt seit Jahren begleiten — als Berater, als Käufer, als Nachbarn."
      />

      <section className="bg-background px-6 py-section lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[520px_1fr] lg:gap-20">
          <FadeIn>
            <ImagePlaceholder
              label="[Foto: Team im Büro, nahbar — natürliches Licht]"
              className="aspect-[4/3] w-full"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-6 font-serif text-headline font-normal text-foreground">
              Diskretion ist keine Geste.
              <br />
              Sie ist Methode.
            </h2>
            <p className="max-w-xl font-sans text-base font-light leading-loose text-foreground/70">
              Wir arbeiten persönlich, direkt und ohne Umwege. Jedes Mandat hat bei uns einen
              Namen und ein Gesicht — vom ersten Gespräch bis zum Notartermin. Was uns
              anvertraut wird, bleibt bei uns.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-6 pb-section lg:px-12">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12">
            <SectionLabel className="mb-4">Team</SectionLabel>
            <h2 className="font-serif text-headline font-normal text-foreground">
              Ihre Ansprechpartner
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.length > 0
              ? team.map((person) => (
                  <FadeIn key={person._id}>
                    <div>
                      {person.bild ? (
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={urlFor(person.bild).width(640).height(800).url()}
                            alt={`Porträt von ${person.name}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover grayscale"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder label={`[Foto: ${person.name}]`} className="aspect-[4/5] w-full" />
                      )}
                      <h3 className="mt-5 font-serif text-2xl font-medium text-foreground">
                        {person.name}
                      </h3>
                      {person.rolle && (
                        <p className="mt-1 font-sans text-xs uppercase tracking-[0.16em] text-grey">
                          {person.rolle}
                        </p>
                      )}
                      {person.kurzbiografie && (
                        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-foreground/65">
                          {person.kurzbiografie}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                ))
              : [
                  "[Foto: Person 1, nahbar]",
                  "[Foto: Person 2, nahbar]",
                  "[Foto: Person 3, nahbar]",
                ].map((label) => (
                  <FadeIn key={label}>
                    <div>
                      <ImagePlaceholder label={label} className="aspect-[4/5] w-full" />
                      <p className="mt-5 font-sans text-sm font-light text-grey">
                        Teammitglied — wird über das Sanity-Studio gepflegt.
                      </p>
                    </div>
                  </FadeIn>
                ))}
          </div>
        </div>
      </section>

      <KontaktBanner />
    </>
  );
}
