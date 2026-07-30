import type { Metadata } from "next";
import { PortfolioCollection } from "@/components/portfolio-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Casos de Sitios Web Profesionales | Binah IT Solutions",
  description:
    "Conozca proyectos reales de Binah con contexto, decisiones de UX, tecnología, entregables y evidencias verificables.",
  path: "/es/proyectos",
  keywords: ["casos de sitios web", "portafolio web profesional", "proyectos Next.js"],
  locale: "es_ES",
  languagePaths: {
    "pt-BR": "/portfolio",
    en: "/en/work",
    es: "/es/proyectos",
    "x-default": "/portfolio",
  },
});

export default function SpanishProjectsPage() {
  return <PortfolioCollection locale="es" />;
}
