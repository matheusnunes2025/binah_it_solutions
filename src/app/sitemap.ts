import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30T00:00:00-03:00");

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          "pt-BR": absoluteUrl("/pt-br"),
          es: absoluteUrl("/es"),
        },
      },
    },
    {
      url: absoluteUrl("/pt-br"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          "pt-BR": absoluteUrl("/pt-br"),
          es: absoluteUrl("/es"),
        },
      },
    },
    {
      url: absoluteUrl("/es"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          "pt-BR": absoluteUrl("/pt-br"),
          es: absoluteUrl("/es"),
        },
      },
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
    {
      url: absoluteUrl("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: absoluteUrl("/pt-br/privacidade"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: absoluteUrl("/es/privacidad"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.25,
    },
  ];
}
