interface SectionLabelProps {
  children: string;
  className?: string;
}

/** Kleines gesperrtes Label über Headlines, z. B. „OFF-MARKET". */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`block font-sans text-xs font-medium uppercase tracking-[0.22em] text-grey ${className}`}
    >
      {children}
    </span>
  );
}
