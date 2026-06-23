import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-23T00:00:00-03:00");

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
      url: absoluteUrl("/infraestrutura-de-ti-para-empresas"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: absoluteUrl("/projetos"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/sites-para-nutricionistas"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: absoluteUrl("/sites-para-engenharia-arquitetura-construtoras"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    },
  ];
}
