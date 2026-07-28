import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

/** Ohne konfiguriertes Projekt (lokale Entwicklung) bleibt der Client null. */
export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: true,
    })
  : null;
