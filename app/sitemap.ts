import type { MetadataRoute } from "next";

const PAGES: [string, number, "weekly" | "monthly"][] = [
  ["", 1, "weekly"],
  ["/operator-diligence", 0.95, "monthly"],
  ["/who-we-work-with", 0.85, "monthly"],
  ["/faq", 0.9, "monthly"],
  ["/story", 0.8, "monthly"],
  ["/about", 0.7, "monthly"],
  ["/contact", 0.6, "monthly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([path, priority, changeFrequency]) => ({
    url: `https://brightmerehq.com${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
