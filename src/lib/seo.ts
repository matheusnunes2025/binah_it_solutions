import type { Metadata } from "next";
import {
  getCopy,
  localeConfig,
  localeHome,
  localePrivacy,
  privacyByLocale,
  type Locale,
} from "@/lib/i18n";
import { contact, services } from "@/lib/site";

export const siteConfig = {
  name: "Binah IT Solutions",
  shortName: "Binah IT",
  legalName: "Binah IT Solutions",
  url: "https://www.binahitsolutions.com",
  locale: "pt_BR",
  defaultTitle: "Criação de Sites Profissionais | Binah IT Solutions",
  description:
    "Sites profissionais em Next.js, preparados para Google, anúncios e WhatsApp. Projetos a partir de R$ 2.490.",
  ogImage: "/images/og-binah-it-solutions.webp",
  keywords: [
    "criação de sites profissionais",
    "desenvolvimento de sites",
    "site institucional",
    "landing pages",
    "sites em Next.js",
    "Meta Ads",
    "Google Ads",
    "SEO técnico",
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
  locale = "pt_BR",
  languagePaths,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  locale?: string;
  languagePaths?: Record<string, string>;
}): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);
  const languages = languagePaths
    ? Object.fromEntries(
        Object.entries(languagePaths).map(([language, languagePath]) => [
          language,
          absoluteUrl(languagePath),
        ]),
      )
    : undefined;

  return {
    title,
    description,
    keywords: [...new Set([...siteConfig.keywords, ...keywords])],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: "Binah IT Solutions - sites, anúncios e infraestrutura de TI para empresas",
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

export function buildLocalizedHomeMetadata(locale: Locale): Metadata {
  const copy = getCopy(locale);
  const path = localeHome(locale);
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);
  const alternateLocales = (["en", "pt", "es"] as Locale[])
    .filter((item) => item !== locale)
    .map((item) => localeConfig[item].ogLocale);

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl("/en"),
        "pt-BR": absoluteUrl("/"),
        es: absoluteUrl("/es"),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale].ogLocale,
      alternateLocale: alternateLocales,
      url: canonical,
      siteName: siteConfig.name,
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: "Binah IT Solutions — criação de sites profissionais em Next.js",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: [image],
    },
  };
}

export function buildLocalizedPrivacyMetadata(locale: Locale): Metadata {
  const copy = privacyByLocale[locale];
  const canonical = absoluteUrl(localePrivacy(locale));

  return {
    title: `${copy.title} | Binah IT Solutions`,
    description: copy.intro,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl("/en/privacy"),
        "pt-BR": absoluteUrl("/privacidade"),
        es: absoluteUrl("/es/privacidad"),
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: localeConfig[locale].ogLocale,
      url: canonical,
      siteName: siteConfig.name,
      title: `${copy.title} | Binah IT Solutions`,
      description: copy.intro,
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
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.ogImage),
        logo: absoluteUrl("/images/logo.png"),
        description: siteConfig.description,
        email: contact.email,
        telephone: contact.phoneDisplay,
        sameAs: [contact.instagramUrl],
        areaServed: "BR",
        serviceType: [
          "Criação de sites profissionais",
          "Desenvolvimento de sites em Next.js",
          "Landing pages",
          "SEO técnico",
          "Meta Ads",
          "Google Ads",
          "IT infrastructure and business networks",
          ...services.map((service) => service.title),
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: contact.phoneDisplay,
            email: contact.email,
            availableLanguage: ["en", "pt-BR", "es"],
            url: absoluteUrl("/#contact"),
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: ["pt-BR", "en", "es"],
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
