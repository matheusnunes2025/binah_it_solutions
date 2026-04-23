import type { Metadata } from "next";
import { contact, services } from "@/lib/site";

export const siteConfig = {
  name: "Binah IT",
  legalName: "Binah IT Solutions",
  url: "https://binahitsolutions.com",
  locale: "pt_BR",
  defaultTitle: "Binah IT | Criacao de sites, Google Meu Negocio e anuncios",
  description:
    "Criacao de sites profissionais, landing pages, Google Meu Negocio, Google Ads e Meta Ads para empresas que querem aparecer melhor no Google e captar novos clientes.",
  ogImage: "/images/hero-acquisition-system.png",
  keywords: [
    "criacao de sites profissionais",
    "site profissional para empresas",
    "landing pages",
    "google meu negocio",
    "google ads",
    "meta ads",
    "presenca digital para empresas",
    "captacao de clientes online",
    "site para captar clientes",
    "empresa de criacao de sites",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);

  return {
    title,
    description,
    keywords: [...new Set([...siteConfig.keywords, ...keywords])],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: "Binah IT - sites, Google e anuncios para captar clientes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function buildBaseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.name,
        alternateName: siteConfig.legalName,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.ogImage),
        logo: absoluteUrl("/images/logo-binah-ember.png"),
        description: siteConfig.description,
        email: contact.email,
        telephone: contact.phoneDisplay,
        sameAs: [contact.instagramUrl],
        areaServed: "BR",
        serviceType: services.map((service) => service.title),
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: contact.phoneDisplay,
            email: contact.email,
            availableLanguage: ["pt-BR"],
            url: absoluteUrl("/contato"),
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "pt-BR",
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    ],
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
