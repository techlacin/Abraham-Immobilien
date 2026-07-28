import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./client";
import type { SanityImage } from "@/types";

const builder = projectId
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImage) {
  if (!builder) {
    throw new Error("Sanity ist nicht konfiguriert (NEXT_PUBLIC_SANITY_PROJECT_ID fehlt).");
  }
  return builder.image(source).auto("format");
}
