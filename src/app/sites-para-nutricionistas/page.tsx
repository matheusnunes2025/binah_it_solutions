import type { Metadata } from "next";
import { SegmentLandingPage } from "@/components/segment-landing-page";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import { segmentPages } from "@/lib/site";

const page = segmentPages.nutritionists;

export const metadata: Metadata = buildPageMetadata({
  title: "Site para nutricionistas | Páginas profissionais para atrair pacientes",
  description:
    "Criação de sites profissionais para nutricionistas que querem apresentar seus atendimentos, transmitir confiança e facilitar o agendamento pelo WhatsApp.",
  path: page.slug,
  keywords: [
    "site para nutricionistas",
    "página para nutricionista",
    "site profissional para consultório de nutrição",
    "landing page para nutricionista",
  ],
});

export default function NutritionistsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": absoluteUrl(`${page.slug}#service`),
        name: "Site profissional para nutricionistas",
        description: page.description,
        provider: {
          "@id": absoluteUrl("/#organization"),
        },
        areaServed: "BR",
        url: absoluteUrl(page.slug),
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl(`${page.slug}#faq`),
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <SegmentLandingPage
        page={page}
        whatsappMessage="Olá, vim pela página de sites para nutricionistas da Binah IT Solutions e quero solicitar um orçamento."
      />
    </>
  );
}
