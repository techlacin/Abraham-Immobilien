interface GoldDividerProps {
  className?: string;
  vertical?: boolean;
}

/** Dünne Linie mit Gold-Verlauf — transparent → gold → transparent. */
export function GoldDivider({ className = "", vertical = false }: GoldDividerProps) {
  if (vertical) {
    return (
      <div
        aria-hidden
        className={`w-px bg-gradient-to-b from-transparent via-gold to-transparent ${className}`}
      />
    );
  }
  return (
    <hr
      aria-hidden
      className={`h-px border-0 bg-gradient-to-r from-transparent via-gold to-transparent ${className}`}
    />
  );
}
