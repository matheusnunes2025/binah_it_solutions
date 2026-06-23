import type { Metadata } from "next";
import { SegmentLandingPage } from "@/components/segment-landing-page";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import { segmentPages } from "@/lib/site";

const page = segmentPages.construction;

export const metadata: Metadata = buildPageMetadata({
  title: "Site para engenharia, arquitetura e construtoras | Presença profissional",
  description:
    "Criação de sites profissionais para engenheiros, arquitetos, construtoras e empreiteiras que querem apresentar serviços, obras e captar clientes com mais confiança.",
  path: page.slug,
  keywords: [
    "site para engenharia",
    "site para arquitetura",
    "site para construtoras",
    "site para empreiteiras",
    "landing page para obras",
  ],
});

export default function ConstructionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": absoluteUrl(`${page.slug}#service`),
        name: "Site profissional para engenharia, arquitetura e construtoras",
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
        whatsappMessage="Olá, vim pela página de sites para engenharia, arquitetura e construtoras da Binah IT Solutions e quero solicitar uma análise do projeto."
      />
    </>
  );
}
