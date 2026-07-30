import type { Metadata } from "next";
import { PortfolioCollection } from "@/components/portfolio-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Professional Website Case Studies | Binah IT Solutions",
  description:
    "Explore real Binah projects with context, UX decisions, technology, deliverables and verifiable evidence from the live websites.",
  path: "/en/work",
  keywords: ["website case studies", "professional website portfolio", "Next.js projects"],
  locale: "en_US",
  languagePaths: {
    "pt-BR": "/portfolio",
    en: "/en/work",
    es: "/es/proyectos",
    "x-default": "/portfolio",
  },
});

export default function EnglishWorkPage() {
  return <PortfolioCollection locale="en" />;
}
