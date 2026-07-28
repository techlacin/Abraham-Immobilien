import type { MetadataRoute } from "next";

const BASE = "https://www.abraham-immobilien.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, priority: 1, changeFrequency: "monthly" },
    { url: `${BASE}/off-market`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/leistungen`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/ueber-uns`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/kontakt`, priority: 0.8, changeFrequency: "yearly" },
  ];
}
