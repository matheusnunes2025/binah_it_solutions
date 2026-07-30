import type { MetadataRoute } from "next";
import { localeCaseStudy } from "@/lib/i18n";
import { portfolioSlugs } from "@/lib/portfolio";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30T00:00:00-03:00");
  const homeLanguages = {
    "pt-BR": absoluteUrl("/"),
    en: absoluteUrl("/en"),
    es: absoluteUrl("/es"),
    "x-default": absoluteUrl("/"),
  };
  const portfolioLanguages = {
    "pt-BR": absoluteUrl("/portfolio"),
    en: absoluteUrl("/en/work"),
    es: absoluteUrl("/es/proyectos"),
  };
  const privacyLanguages = {
    "pt-BR": absoluteUrl("/privacidade"),
    en: absoluteUrl("/en/privacy"),
    es: absoluteUrl("/es/privacidad"),
  };

  const caseEntries: MetadataRoute.Sitemap = portfolioSlugs.flatMap((slug) => {
    const languages = {
      "pt-BR": absoluteUrl(localeCaseStudy("pt", slug)),
      en: absoluteUrl(localeCaseStudy("en", slug)),
      es: absoluteUrl(localeCaseStudy("es", slug)),
    };

    return (["pt", "en", "es"] as const).map((locale) => ({
      url: absoluteUrl(localeCaseStudy(locale, slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
      alternates: { languages },
    }));
  });

  return [
    ...(["/", "/en", "/es"] as const).map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: { languages: homeLanguages },
    })),
    {
      url: absoluteUrl("/criacao-de-sites"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    ...(["/portfolio", "/en/work", "/es/proyectos"] as const).map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.86,
      alternates: { languages: portfolioLanguages },
    })),
    ...caseEntries,
    {
      url: absoluteUrl("/servicos"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: absoluteUrl("/infraestrutura-de-ti-para-empresas"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: absoluteUrl("/contato"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: absoluteUrl("/sites-para-nutricionistas"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/sites-para-engenharia-arquitetura-construtoras"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...(["/privacidade", "/en/privacy", "/es/privacidad"] as const).map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.25,
      alternates: { languages: privacyLanguages },
    })),
  ];
}
