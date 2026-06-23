import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  CheckCircle2,
  Compass,
  Megaphone,
  MessageCircle,
  Monitor,
  MousePointerClick,
  Search,
  Server,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { VisualFrame } from "@/components/visual-frame";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import {
  services,
  servicesVisual,
  type ServiceSlug,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Serviços | Sites, anúncios e infraestrutura | Binah IT Solutions",
  description:
    "Conheça os serviços da Binah IT Solutions: sites profissionais, landing pages, Google Ads, Meta Ads, estrutura para buscas e infraestrutura de TI para empresas.",
  path: "/servicos",
  keywords: [
    "serviços de criação de sites",
    "landing pages para captar clientes",
    "estrutura para buscas",
    "Google Ads para empresas",
    "Meta Ads para empresas",
    "infraestrutura de TI para empresas",
  ],
});

const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  landing: MousePointerClick,
  site: Monitor,
  "search-structure": Search,
  "google-ads": BadgeDollarSign,
  "meta-ads": Megaphone,
  infrastructure: Server,
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/servicos#webpage"),
        url: absoluteUrl("/servicos"),
        name: "Serviços | Sites, anúncios e infraestrutura | Binah IT Solutions",
        description:
          "Página de serviços da Binah IT Solutions com sites profissionais, landing pages, Google Ads, Meta Ads, estrutura para buscas e infraestrutura de TI.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/servicos#breadcrumb"),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Serviços",
            item: absoluteUrl("/servicos"),
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/servicos#itemlist"),
        name: "Serviços da Binah IT Solutions",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
          url: absoluteUrl(`/servicos#${service.anchor}`),
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesJsonLd) }}
      />

      <section className="hero-glow relative overflow-hidden border-b border-[#B9A796]/35">
        <div className="absolute inset-0 fine-grid opacity-30" />
        <div className="site-container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow inline-flex items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2">
              <Compass size={16} />
              Serviços Binah IT
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
              Sites, anúncios e infraestrutura para empresas.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D] sm:text-lg">
              Soluções digitais e técnicas para apresentar melhor sua empresa, captar
              contatos e organizar sua operação.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato#formulario"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
              >
                <MessageCircle size={19} />
                Entrar em contato
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#B9A796]/65 bg-white/45 px-5 py-3.5 text-sm font-semibold text-[#2D2D2D] transition hover:border-[#C8A679] hover:bg-[#EFE7DA]"
              >
                <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT Solutions" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <VisualFrame
            src={servicesVisual.image}
            alt={servicesVisual.alt}
            sizes="(min-width: 1024px) 560px, 92vw"
            priority
            className="aspect-[16/10]"
          />
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Entregas principais"
            title="Cada serviço resolve uma parte da sua estrutura."
            description="O cliente encontra, entende e chama. A empresa opera com mais organização."
          />

          <div className="mt-12 grid gap-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug];
              const isEven = index % 2 === 0;

              return (
                <article
                  id={service.anchor}
                  key={service.slug}
                  className="grid scroll-mt-28 overflow-hidden rounded-[8px] border border-[#B9A796]/45 bg-white shadow-[var(--shadow-card)] lg:grid-cols-2"
                >
                  <VisualFrame
                    src={service.image}
                    alt={service.alt}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`aspect-[16/10] rounded-none border-0 shadow-none lg:aspect-auto lg:min-h-[420px] ${
                      isEven ? "" : "lg:order-2"
                    }`}
                    framed={false}
                  />
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <span className="grid size-12 place-items-center rounded-[8px] bg-[#C8A679]/22 text-[#5B331A]">
                      <Icon size={25} />
                    </span>
                    <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-[#1E1E1E]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#2D2D2D]">
                      {service.description}
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex gap-2 text-sm leading-6 text-[#2D2D2D]">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-[#5B331A]" size={18} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space warm-premium-section">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Diagnóstico inicial</p>
            <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl">
              Mais clareza para vender. Mais estrutura para operar.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D]">
              Escolha por onde começar: site, anúncios, busca ou infraestrutura.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#C8A679]/45 bg-[#F8F5ED]/78 p-6 shadow-[var(--shadow-premium)]">
            <p className="font-serif text-2xl font-semibold text-[#1E1E1E]">
              Vamos definir o próximo passo?
            </p>
            <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">
              Envie seu cenário. A resposta vem com direção.
            </p>
            <Link
              href="/contato#formulario"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] sm:w-auto"
            >
              <MessageCircle size={19} />
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
