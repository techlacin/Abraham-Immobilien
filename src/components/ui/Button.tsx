import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "dark" | "on-photo";
type Size = "sm" | "md" | "lg";

const base =
  "inline-block rounded-none text-center font-sans font-medium uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-foreground hover:bg-gold-dark",
  outline: "border border-gold/60 text-gold-light hover:bg-gold hover:text-foreground",
  ghost: "text-foreground underline-offset-4 hover:text-gold-dark",
  dark: "bg-foreground text-white border border-white/20 hover:border-gold",
  "on-photo": "border border-white/75 text-white hover:bg-gold hover:border-gold hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-8 py-3.5 text-xs",
  lg: "px-10 py-4 text-xs",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
