"use client";

import { useSyncExternalStore } from "react";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string | null {
  return localStorage.getItem(CONSENT_KEY);
}

// Auf dem Server gilt die Entscheidung als „offen, aber unbekannt" —
// der Banner erscheint erst nach der Hydration, wenn wirklich nichts gespeichert ist.
function getServerSnapshot(): string | null {
  return "pending";
}

/** Aktueller Consent-Status: "accepted" | "declined" | null (offen) | "pending" (SSR). */
export function useConsent(): string | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setConsent(value: "accepted" | "declined") {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function CookieBanner() {
  const consent = useConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/40 bg-foreground px-6 py-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <p className="font-sans text-sm font-light text-background/75">
          Diese Website verwendet Google Analytics zur Analyse der Nutzung.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-none px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-background/60 transition-all duration-200 hover:text-background"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-none bg-gold px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-all duration-200 hover:bg-gold-dark"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
