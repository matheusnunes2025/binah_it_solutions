import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { buildBaseJsonLd, serializeJsonLd, siteConfig } from "@/lib/seo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | Binah IT",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    locale: "pt_BR",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 900,
        alt: "Binah IT - sites, Google e anuncios para captar clientes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseJsonLd = buildBaseJsonLd();

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-bg text-stone-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(baseJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
