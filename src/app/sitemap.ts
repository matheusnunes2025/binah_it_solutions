import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-23T12:00:00-03:00");

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/servicos"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
