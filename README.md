# Abraham Immobilien Advisors GmbH — Website

Off-Market-Immobilienspezialist, Berlin. Ruhig, souverän, exklusiv — und trotzdem nahbar.

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Sprache | TypeScript (strict) |
| Styling | Tailwind CSS v4 (Design-Tokens per `@theme` in `src/app/globals.css`) |
| CMS | Sanity (Studio unter `/studio`) |
| Formulare | React Hook Form + Zod |
| E-Mail | Resend |
| Karten | Google Maps (`@vis.gl/react-google-maps`) |
| Analytics | GA4 via `@next/third-parties` — lädt nur nach Cookie-Zustimmung |
| Animation | Framer Motion (nur dezentes Scroll-Einblenden) |
| Hosting | Netlify (`@netlify/plugin-nextjs`) |

## Lokales Setup

Voraussetzung: Node.js ≥ 20.9 (empfohlen: 22).

```bash
npm install
cp .env.example .env.local   # Werte eintragen, siehe unten
npm run dev                  # http://localhost:3000
```

### Umgebungsvariablen (`.env.local`)

| Variable | Zweck |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity-Projekt-ID (siehe „Sanity einrichten") |
| `NEXT_PUBLIC_SANITY_DATASET` | i. d. R. `production` |
| `SANITY_API_TOKEN` | Nur nötig für Schreibzugriffe/Preview |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Karte auf der Kontaktseite (ohne Key: Platzhalter) |
| `NEXT_PUBLIC_GA_ID` | GA4-Measurement-ID (`G-…`); ohne ID lädt kein Analytics |
| `RESEND_API_KEY` | E-Mail-Versand der Formulare |
| `CONTACT_EMAIL` | Zielpostfach, Standard `info@abraham-immobilien.de` |

**Ohne Keys läuft die Seite trotzdem:** Karte und Team-Sektion zeigen Platzhalter,
Formulare melden einen Versandfehler, Analytics bleibt aus.

### Sanity einrichten (einmalig)

```bash
npx sanity@latest init --env .env.local
```

Beim Init ein neues Projekt anlegen; die Projekt-ID landet in `.env.local`.
Schemas liegen in `sanity/schemas/` (Immobilie, Teammitglied), das Studio ist
unter `http://localhost:3000/studio` eingebunden.

## Struktur

```
src/
├── app/                  # Routen (App Router) + API (contact, off-market)
├── components/
│   ├── layout/           # Navbar, Footer, CookieBanner, Analytics, PageHeader
│   ├── home/             # Die 7 Startseiten-Sektionen
│   ├── off-market/       # Investor- und Eigentümer-Formular
│   ├── kontakt/          # Kontaktformular + Standortkarte
│   ├── ui/               # Button, GoldDivider, SectionLabel, Formular-Bausteine …
│   └── seo/              # JSON-LD (RealEstateAgent)
├── lib/                  # Sanity-Client/Queries, Resend, Zod-Schemas
└── types/                # Gemeinsame TypeScript-Typen
sanity/schemas/           # Sanity-Dokumenttypen
```

## Design-System

- Farben: Off-White `#FAFAF8`, Tiefschwarz `#0A0A0A`, Gold `#D4AF5A / #C9A227 / #B8952E`, Grau `#9A9A9A`
- Gold nur als Linie, Border, Icon oder kleiner Button — nie als Fläche (max. 5–10 %)
- Typografie: Cormorant Garamond (Headlines), Inter (Body); beide via `next/font`
- Alles eckig: `rounded-none` ist Markensignatur
- Fotografie: echte Berliner Architektur, S/W — aktuell beschriftete Platzhalter (`ImagePlaceholder`)

## Formulare & Spam-Schutz

Alle Formulare validieren client- und serverseitig mit denselben Zod-Schemas
(`src/lib/validation.ts`). Ein unsichtbares Honeypot-Feld (`firma_webseite`)
fängt Bots ab — bei Befüllung antwortet die API still mit 200, ohne E-Mail.
Bestätigungs-E-Mail an den Absender inklusive.

## Deployment (Netlify)

`netlify.toml` liegt bei (Plugin `@netlify/plugin-nextjs`, Security-Header,
Node 22). Umgebungsvariablen im Netlify-Dashboard hinterlegen — nie committen
(`.env*` ist bis auf `.env.example` gitignored).

## Checks

```bash
npm run build   # Produktions-Build (muss ohne Fehler durchlaufen)
npm run lint    # ESLint inkl. React-Hooks-Regeln
```

---

Abraham Immobilien Advisors GmbH · Kurfürstendamm 15, 10719 Berlin
