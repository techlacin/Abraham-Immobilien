interface LogoProps {
  inverse?: boolean;
  compact?: boolean;
}

/**
 * Logo-Lockup: facettiertes Geometrie-A mit Gold-Verlauf,
 * darunter „ABRAHAM" in gesperrten Kapitälchen und „IMMOBILIEN" als Unterzeile.
 */
export function Logo({ inverse = false, compact = false }: LogoProps) {
  const gradientId = inverse ? "logo-grad-inv" : "logo-grad";
  const gradientId2 = `${gradientId}-b`;

  return (
    <span className="flex items-center gap-3">
      <svg
        width={compact ? 28 : 34}
        height={compact ? 25 : 30}
        viewBox="0 0 34 30"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D4AF5A" />
            <stop offset="1" stopColor="#B8952E" />
          </linearGradient>
          <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C9A227" />
            <stop offset="1" stopColor="#8F7420" />
          </linearGradient>
        </defs>
        <polygon points="17,0 3,30 11,30 17,9" fill={`url(#${gradientId})`} />
        <polygon points="17,0 17,9 23,30 31,30" fill={`url(#${gradientId2})`} />
        <polygon points="13,22 21,22 22.5,26 11.5,26" fill={`url(#${gradientId})`} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif font-semibold tracking-[0.32em] ${
            compact ? "text-[13px]" : "text-[15px]"
          } ${inverse ? "text-background" : "text-foreground"}`}
        >
          ABRAHAM
        </span>
        <span
          className={`mt-1 font-sans text-[8px] font-normal tracking-[0.52em] ${
            inverse ? "text-background/55" : "text-grey"
          }`}
        >
          IMMOBILIEN
        </span>
      </span>
    </span>
  );
}
