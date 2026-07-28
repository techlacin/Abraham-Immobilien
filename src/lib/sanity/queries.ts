import { sanityClient } from "./client";
import type { Immobilie, Teammitglied } from "@/types";

const TEAM_QUERY = `*[_type == "teammitglied"] | order(reihenfolge asc) {
  _id, name, rolle, bild, kurzbiografie, reihenfolge
}`;

const FEATURED_QUERY = `*[_type == "immobilie" && verfuegbar == true && featured == true] | order(_createdAt desc) [0...6] {
  _id, titel, slug, objekttyp, angebotstyp, bezirk, bilder, seoTitel, seoDesc, verfuegbar, featured
}`;

/** Teammitglieder — leere Liste, wenn Sanity (noch) nicht konfiguriert ist. */
export async function getTeam(): Promise<Teammitglied[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(TEAM_QUERY, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error("[sanity] getTeam fehlgeschlagen:", error);
    return [];
  }
}

/** Ausgewählte Objekte für die On-Market-Welt (nicht auf der Startseite verwendet). */
export async function getFeaturedImmobilien(): Promise<Immobilie[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch(FEATURED_QUERY, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error("[sanity] getFeaturedImmobilien fehlgeschlagen:", error);
    return [];
  }
}
