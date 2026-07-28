import type { PortableTextBlock } from "next-sanity";

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface Immobilie {
  _id: string;
  titel: string;
  slug: { current: string };
  objekttyp: "Wohnung" | "Haus" | "Gewerbe" | "Grundstück";
  angebotstyp: "Kauf" | "Miete";
  preis?: number;
  flaeche?: number;
  zimmer?: number;
  baujahr?: number;
  bezirk?: string;
  adresse?: string;
  koordinaten?: { lat: number; lng: number };
  bilder?: SanityImage[];
  beschreibung?: PortableTextBlock[];
  verfuegbar: boolean;
  featured: boolean;
  seoTitel?: string;
  seoDesc?: string;
}

export interface Teammitglied {
  _id: string;
  name: string;
  rolle?: string;
  bild?: SanityImage;
  kurzbiografie?: string;
  reihenfolge?: number;
}
