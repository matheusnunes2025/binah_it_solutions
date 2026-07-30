import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/portfolio-pages";
import { localeCaseStudy } from "@/lib/i18n";
import {
  getPortfolioProject,
  portfolioSlugs,
} from "@/lib/portfolio";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject("en", slug);
  if (!project) return {};

  return buildPageMetadata({
    title: `${project.title}: case study | Binah IT Solutions`,
    description: project.summary,
    path: localeCaseStudy("en", project.slug),
    keywords: [`${project.title} case study`, "website case study", project.sector],
    locale: "en_US",
    languagePaths: {
      "pt-BR": localeCaseStudy("pt", project.slug),
      en: localeCaseStudy("en", project.slug),
      es: localeCaseStudy("es", project.slug),
      "x-default": localeCaseStudy("pt", project.slug),
    },
  });
}

export default async function EnglishCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPortfolioProject("en", slug);
  if (!project) notFound();

  return <CaseStudyPage locale="en" project={project} />;
}
