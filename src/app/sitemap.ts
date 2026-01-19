import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    "",
    "/speisekarten",
    "/restaurant",
    "/veranstaltungen",
    "/galerie",
    "/ueber-uns",
    "/kontakt",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
