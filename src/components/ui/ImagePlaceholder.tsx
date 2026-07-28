interface ImagePlaceholderProps {
  label: string;
  className?: string;
  dark?: boolean;
}

/**
 * Platzhalter für echte Fotografie. Wird ersetzt, sobald das Bildmaterial
 * (Berliner Architektur, S/W bzw. stark entsättigt) vorliegt.
 */
export function ImagePlaceholder({ label, className = "", dark = false }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center overflow-hidden ${
        dark ? "bg-[#23231f]" : "bg-[#e7e6e1]"
      } ${className}`}
      style={{
        backgroundImage: dark
          ? "repeating-linear-gradient(135deg, transparent 0 26px, rgba(255,255,255,0.02) 26px 52px)"
          : "repeating-linear-gradient(135deg, transparent 0 22px, rgba(0,0,0,0.025) 22px 44px)",
      }}
    >
      <span
        className={`px-4 text-center font-sans text-[11px] uppercase leading-loose tracking-[0.14em] ${
          dark ? "text-[#6d6c64]" : "text-[#9a998f]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
