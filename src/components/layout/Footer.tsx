import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="0" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4h3v3H4zM4 9h3v11H4zM9 9h3v1.6c.6-1 1.7-1.8 3.4-1.8 2.7 0 4.6 1.7 4.6 5V20h-3v-5.6c0-1.7-.8-2.6-2.2-2.6-1.4 0-2.8 1-2.8 2.8V20H9z" />
    </svg>
  );
}

const colLabel =
  "mb-4 font-sans text-[10px] uppercase tracking-[0.24em] text-background/35";
const colLink =
  "block py-0.5 font-sans text-sm font-light text-background/75 transition-all duration-200 hover:text-gold-light";

export function Footer() {
  return (
    <footer className="bg-[#060606] text-background/55">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-12 lg:pt-20">
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" aria-label="Abraham Immobilien — Startseite" className="mb-6 inline-block">
              <Logo inverse />
            </Link>
            <address className="font-sans text-sm font-light not-italic leading-loose">
              Abraham Immobilien Advisors GmbH
              <br />
              Kurfürstendamm 15
              <br />
              10719 Berlin
            </address>
          </div>

          <div>
            <div className={colLabel}>Kontakt</div>
            <a href="mailto:info@abraham-immobilien.de" className={colLink}>
              info@abraham-immobilien.de
            </a>
            <a href="tel:+49301234560" className={colLink}>
              +49 30 123 456 0
            </a>
          </div>

          <div>
            <div className={colLabel}>Folgen</div>
            <a
              href="https://www.instagram.com/abraham.immobilien"
              rel="noopener noreferrer"
              target="_blank"
              className={`${colLink} flex items-center gap-2`}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/abraham-immobilien"
              rel="noopener noreferrer"
              target="_blank"
              className={`${colLink} flex items-center gap-2`}
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>

          <div>
            <div className={colLabel}>Rechtliches</div>
            <Link href="/datenschutz" className={colLink}>
              Datenschutz
            </Link>
            <Link href="/impressum" className={colLink}>
              Impressum
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-7 font-sans text-[11.5px] font-light text-background/35 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Abraham Immobilien Advisors GmbH</span>
          <Link
            href="https://objekte.abraham-immobilien.de"
            className="text-background/45 transition-all duration-200 hover:text-gold-light"
          >
            Zur Objektübersicht →
          </Link>
        </div>
      </div>
    </footer>
  );
}
