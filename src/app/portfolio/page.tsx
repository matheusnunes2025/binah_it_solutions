import type { Metadata } from "next";
import { PortfolioCollection } from "@/components/portfolio-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfólio de Sites Profissionais | Binah IT Solutions",
  description:
    "Conheça cases reais da Binah com contexto, decisões de UX, tecnologia, entregáveis e evidências verificáveis nos sites publicados.",
  path: "/portfolio",
  keywords: ["portfólio de sites", "cases de desenvolvimento web", "sites profissionais"],
  locale: "pt_BR",
  languagePaths: {
    "pt-BR": "/portfolio",
    en: "/en/work",
    es: "/es/proyectos",
    "x-default": "/portfolio",
  },
});

export default function PortfolioPage() {
  return <PortfolioCollection locale="pt" />;
}
