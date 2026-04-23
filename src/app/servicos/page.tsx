import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Compass,
  MapPin,
  Megaphone,
  Monitor,
  MousePointerClick,
  Search,
} from "lucide-react";
import { ImageOverlayCard } from "@/components/image-overlay-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import {
  categoryExamples,
  processSteps,
  services,
  servicesVisual,
  type ServiceSlug,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicos de sites, Google Meu Negocio e anuncios",
  description:
    "Conheca os servicos da Binah IT: criacao de sites profissionais, landing pages, Google Meu Negocio, Google Ads, Meta Ads e estrutura para captar mais contatos.",
  path: "/servicos",
  keywords: [
    "servicos de criacao de sites",
    "landing pages para captar clientes",
    "google meu negocio",
    "google ads para empresas",
    "meta ads para empresas",
  ],
});

const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  site: Monitor,
  landing: MousePointerClick,
  "google-business": MapPin,
  "search-structure": Search,
  "google-ads": BadgeDollarSign,
  "meta-ads": Megaphone,
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/servicos#webpage"),
        url: absoluteUrl("/servicos"),
        name: "Servicos Binah IT",
        description:
          "Pagina de servicos da Binah IT com criacao de sites, landing pages, Google Meu Negocio, Google Ads e Meta Ads.",
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
            name: "Servicos",
            item: absoluteUrl("/servicos"),
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/servicos#itemlist"),
        name: "Servicos da Binah IT",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
          url: absoluteUrl("/servicos"),
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
      <section className="hero-glow relative overflow-hidden border-b border-white/10 bg-brand-bg px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="absolute inset-0 fine-grid opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(13,18,25,0.96),rgba(13,18,25,0.8),rgba(255,107,26,0.12))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent-strong">
              <Compass size={16} />
              Servicos Binah IT
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-tight text-stone-50 sm:text-6xl">
              Site, Google e anuncios para sua empresa virar opcao de compra.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              O trabalho combina design, mensagem comercial, campanhas e
              caminhos de contato para que o visitante entenda sua empresa e
              tenha motivo para chamar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(
                  "Ola, vim pela pagina de servicos da Binah IT e quero falar sobre site, Google, Google Ads e Meta Ads."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-brand-accent px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong"
              >
                <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT" />
                Solicitar diagnostico
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/[0.02] px-5 py-3.5 text-sm font-semibold text-stone-50 transition hover:border-brand-accent-border hover:bg-white/[0.05]"
              >
                Enviar detalhes
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <ImageOverlayCard
              image={servicesVisual.image}
              title={servicesVisual.title}
              description={servicesVisual.description}
              eyebrow="Imagem criada com IA"
              details={servicesVisual.details}
              alt="Consultoria digital premium para servicos da Binah IT"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[16/10] rounded-[8px] border border-white/10"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {categoryExamples.slice(0, 2).map((item) => (
                <ImageOverlayCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  eyebrow="Exemplo de banner"
                  details={item.details}
                  alt={`Exemplo de site para ${item.title}`}
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="aspect-[4/3] rounded-[8px] border border-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Entregas principais"
            title="Cada servico resolve uma parte do mesmo problema: ser encontrado e receber contatos melhores."
            description="Agora cada frente tem sua propria imagem e sua propria funcao dentro da mesma jornada comercial."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug];

              return (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                >
                  <ImageOverlayCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    eyebrow="Detalhe do servico"
                    details={service.details}
                    alt={`Imagem para ${service.title}`}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10]"
                  />
                  <div className="p-6">
                    <Icon className="text-brand-accent-strong" size={28} />
                    <h2 className="mt-6 text-xl font-semibold text-stone-50">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-stone-400">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-20 text-brand-paper-ink sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
              Metodo
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Da mensagem certa ao clique certo, tudo precisa ter funcao.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-[8px] border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(24,19,17,0.08)]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  Etapa {index + 1}
                </span>
                <p className="mt-4 text-base leading-7 text-brand-paper-muted">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft p-6 md:grid-cols-[1fr_0.7fr] md:p-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl">
              Seu cliente precisa entender rapidamente por que escolher voce.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
              A Binah IT estrutura a presenca digital para deixar sua oferta
              clara, bonita, anunciavel e facil de acionar.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            {[
              "Cada servico agora tem uma imagem propria.",
              "Sem visual repetido nos cards principais.",
              "Com foco em confianca, clareza e captacao.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-stone-200">
                <CheckCircle2 className="text-emerald-300" size={18} />
                {item}
              </div>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-[8px] bg-brand-accent px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong"
            >
              <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT" />
              Conversar sobre meu projeto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
