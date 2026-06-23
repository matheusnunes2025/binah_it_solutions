import type { Metadata } from "next";
import { CheckCircle2, Server, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { VisualFrame } from "@/components/visual-frame";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import { infrastructurePage, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Infraestrutura de TI para empresas | Redes e configuração corporativa",
  description:
    "Soluções de infraestrutura de TI, configuração de redes, Wi-Fi corporativo e organização técnica para empresas que precisam de uma base mais profissional.",
  path: "/infraestrutura-de-ti-para-empresas",
  keywords: [
    "infraestrutura de TI para empresas",
    "redes corporativas",
    "configuração de redes",
    "Wi-Fi corporativo",
    "roteadores e switches",
    "suporte técnico para empresas",
  ],
});

const evaluationMessage =
  "Olá, vim pela página de infraestrutura da Binah IT Solutions e quero solicitar uma avaliação técnica para minha empresa.";

export default function InfrastructurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/infraestrutura-de-ti-para-empresas#webpage"),
        url: absoluteUrl("/infraestrutura-de-ti-para-empresas"),
        name: "Infraestrutura de TI para empresas | Redes e configuração corporativa",
        description:
          "Soluções de infraestrutura de TI, configuração de redes, Wi-Fi corporativo e organização técnica para empresas.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        about: {
          "@id": absoluteUrl("/infraestrutura-de-ti-para-empresas#service"),
        },
      },
      {
        "@type": "Service",
        "@id": absoluteUrl("/infraestrutura-de-ti-para-empresas#service"),
        name: "Infraestrutura de TI para empresas",
        provider: {
          "@id": absoluteUrl("/#organization"),
        },
        areaServed: "BR",
        serviceType: [
          "Configuração de redes",
          "Wi-Fi corporativo",
          "Organização técnica",
          "Roteadores e switches",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/infraestrutura-de-ti-para-empresas#breadcrumb"),
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
            name: "Infraestrutura de TI para empresas",
            item: absoluteUrl("/infraestrutura-de-ti-para-empresas"),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="hero-glow relative overflow-hidden border-b border-[#B9A796]/35">
        <div className="absolute inset-0 fine-grid opacity-30" />
        <div className="site-container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow inline-flex items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2">
              <Server size={16} />
              Infraestrutura corporativa
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
              Rede, Wi-Fi e suporte técnico para empresas.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D] sm:text-lg">
              Organizamos redes, equipamentos e acessos para ambientes que precisam
              funcionar com estabilidade.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(evaluationMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
              >
                <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
                Solicitar avaliação
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#B9A796]/65 bg-white/45 px-5 py-3.5 text-sm font-semibold text-[#2D2D2D] transition hover:border-[#C8A679] hover:bg-[#EFE7DA]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <VisualFrame
            src={infrastructurePage.image}
            alt={infrastructurePage.alt}
            priority
            sizes="(min-width: 1024px) 560px, 92vw"
            className="aspect-[16/10]"
          />
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="Para quem é"
              title="Para empresas que não podem depender de improviso."
              description="Quando a rede falha, a operação sente. Estrutura organizada reduz gargalos."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {infrastructurePage.audience.map((item) => (
                <article
                  key={item}
                  className="flex min-h-[92px] items-center gap-3 rounded-[8px] border border-[#B9A796]/45 bg-white p-5 shadow-[var(--shadow-card)]"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-[#C8A679]/25 text-[#5B331A]">
                    <ShieldCheck size={20} />
                  </span>
                  <h2 className="text-base font-semibold text-[#1E1E1E]">{item}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#EFE7DA]">
        <div className="site-container">
          <SectionHeading
            eyebrow="O que pode ser feito"
            title="Organização técnica para redes empresariais."
            description="Avaliamos a estrutura atual e organizamos as prioridades."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {infrastructurePage.deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-[#B9A796]/45 bg-[#F8F5ED] p-6 shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="text-[#5B331A]" size={25} />
                <h2 className="mt-5 font-serif text-xl font-semibold text-[#1E1E1E]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space warm-premium-section">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl">
              Quer uma estrutura de TI mais profissional?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D]">
              Envie seu cenário atual e avaliamos o melhor caminho.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#C8A679]/45 bg-[#F8F5ED]/78 p-6 shadow-[var(--shadow-premium)]">
            <Server className="text-[#C8A679]" size={32} />
            <p className="mt-5 font-serif text-2xl font-semibold text-[#1E1E1E]">
              Avaliação técnica objetiva.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">
              Entendemos o ambiente e indicamos o próximo passo.
            </p>
            <a
              href={whatsappLink(evaluationMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] sm:w-auto"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
              Falar com a Binah IT
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
