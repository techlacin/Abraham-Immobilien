import { SectionLabel } from "@/components/ui/SectionLabel";

interface PageHeaderProps {
  label: string;
  titel: string;
  text?: string;
}

/**
 * Dunkler Seitenkopf für Unterseiten — sorgt zugleich dafür,
 * dass die transparente Navbar auf jedem Seitentyp lesbar bleibt.
 */
export function PageHeader({ label, titel, text }: PageHeaderProps) {
  return (
    <section className="bg-foreground px-6 pb-20 pt-36 lg:px-12 lg:pb-24 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <SectionLabel className="mb-5 text-background/40">{label}</SectionLabel>
        <h1 className="max-w-3xl text-balance font-serif text-display font-normal text-background">
          {titel}
        </h1>
        {text && (
          <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-background/60">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
