"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const links = [
  { href: "/off-market", label: "Off-Market" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü schließen, wenn ein Link gewählt wurde
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-foreground/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
        aria-label="Hauptnavigation"
      >
        <Link href="/" aria-label="Abraham Immobilien — Startseite" onClick={close}>
          <Logo inverse />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[13px] tracking-[0.06em] text-white/90 transition-all duration-200 hover:text-gold-light"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://objekte.abraham-immobilien.de"
            className="border-l border-white/20 pl-7 font-sans text-xs text-white/50 transition-all duration-200 hover:text-gold-light"
          >
            Zur Objektübersicht →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </nav>

      {/* Mobile Slide-in */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-foreground/60" onClick={close} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[300px] flex-col bg-foreground px-8 pb-10 pt-6 transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-12 flex items-center justify-between">
            <Logo inverse compact />
            <button type="button" aria-label="Menü schließen" onClick={close} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-serif text-2xl text-background transition-all duration-200 hover:text-gold-light"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="https://objekte.abraham-immobilien.de"
            onClick={close}
            className="mt-auto border-t border-white/10 pt-6 font-sans text-xs uppercase tracking-[0.16em] text-white/50 transition-all duration-200 hover:text-gold-light"
          >
            Zur Objektübersicht →
          </Link>
        </div>
      </div>
    </header>
  );
}
