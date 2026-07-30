import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleCheck,
  Code2,
  Gauge,
  Search,
  Smartphone,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { getCopy, localeCaseStudy } from "@/lib/i18n";
import { portfolioByLocale } from "@/lib/portfolio";
import {
  absoluteUrl,
  buildPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Criação de Sites Profissionais em Next.js | Binah IT Solutions",
  description:
    "Sites profissionais rápidos, responsivos e preparados para Google, anúncios e WhatsApp. Landing pages a partir de R$ 2.490.",
  path: "/criacao-de-sites",
  keywords: [
    "criação de sites profissionais",
    "desenvolvimento de sites Next.js",
    "quanto custa um site profissional",
    "landing page para anúncios",
    "site institucional para empresas",
  ],
  locale: "pt_BR",
});

const included = [
  "Arquitetura de informação orientada ao cliente",
  "Design responsivo para desktop, tablet e celular",
  "Desenvolvimento em Next.js e TypeScript",
  "SEO técnico, metadata, sitemap e robots",
  "Formulário de orçamento ou integração com WhatsApp",
  "Preparação para Google Analytics e Meta Pixel",
  "Otimização de imagens e carregamento",
  "Publicação em domínio próprio e validação final",
] as const;

const faq = [
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "Uma landing page estratégica começa em R$ 2.490, um site institucional em R$ 3.900, uma plataforma de crescimento em R$ 5.900 e projetos sob medida em R$ 10 mil. O valor final é confirmado após o escopo.",
  },
  {
    question: "O site pode ser usado em campanhas do Meta Ads e Google Ads?",
    answer:
      "Sim. A estrutura pode incluir landing pages, captura de parâmetros UTM, eventos de conversão e integração com Analytics ou Meta Pixel mediante consentimento.",
  },
  {
    question: "O site vai aparecer em primeiro lugar no Google?",
    answer:
      "Nenhuma empresa séria pode garantir a primeira posição. A entrega inclui a base técnica para indexação; crescimento orgânico também depende de concorrência, conteúdo, autoridade e evolução contínua.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "O cronograma depende da quantidade de páginas, conteúdo, integrações e velocidade de aprovação. O prazo é definido por escrito junto com o escopo antes do início.",
  },
  {
    question: "Vocês usam templates prontos?",
    answer:
      "A estrutura visual e a arquitetura são definidas conforme posicionamento, oferta e jornada comercial. Componentes reutilizáveis aceleram a engenharia, mas o site não é montado como um template genérico.",
  },
] as const;

export default function WebsiteDevelopmentPage() {
  const copy = getCopy("pt");
  const projects = portfolioByLocale.pt;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl("/criacao-de-sites")}#service`,
        name: "Criação de sites profissionais",
        description: metadata.description,
        provider: { "@id": `${absoluteUrl("/")}#organization` },
        areaServed: "BR",
        serviceType: [
          "Landing page",
          "Site institucional",
          "Site em Next.js",
          "Plataforma web sob medida",
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: "2490",
          description: "Valor inicial para Landing Page Estratégica.",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div id="top" lang="pt-BR" className="enterprise-site money-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="money-page__hero">
        <div className="enterprise-shell money-page__hero-grid">
          <div>
            <p className="enterprise-kicker">
              <span />
              Criação de sites profissionais
            </p>
            <h1>Sites rápidos, claros e preparados para gerar oportunidades.</h1>
            <p>
              Estratégia, design e desenvolvimento em Next.js para empresas que
              precisam transmitir confiança, aparecer nas buscas e converter
              tráfego em contato.
            </p>
            <div className="money-page__hero-actions">
              <Link
                href="#proposta"
                data-track="website-service-proposal"
                data-meta-event="Contact"
              >
                Receber proposta
                <ArrowUpRight size={18} />
              </Link>
              <Link href="#valores">
                Ver projetos e valores
                <ArrowDownRight size={17} />
              </Link>
            </div>
            <div className="money-page__price">
              <strong>A partir de R$ 2.490</strong>
              <span>Escopo e prazo confirmados antes do início.</span>
            </div>
          </div>

          <div className="money-page__visual">
            <Image
              src="/images/projeto-central-do-credito.jpg"
              alt="Projeto Central do Crédito desenvolvido para apresentar serviços e gerar simulações"
              fill
              priority
              sizes="(min-width: 1000px) 48vw, 100vw"
            />
            <div>
              <span>PROJETO REAL / PUBLICADO</span>
              <strong>Central do Crédito</strong>
              <small>Next.js • SEO • WhatsApp • Consentimento</small>
            </div>
          </div>
        </div>
      </section>

      <section className="money-page__proof">
        <div className="enterprise-shell">
          <span><Code2 size={17} />Next.js + TypeScript</span>
          <span><Smartphone size={17} />Design responsivo</span>
          <span><Search size={17} />SEO técnico</span>
          <span><Gauge size={17} />Estrutura otimizada</span>
        </div>
      </section>

      <section id="valores" className="enterprise-section enterprise-section--paper scroll-anchor">
        <div className="enterprise-shell">
          <div className="enterprise-section-heading enterprise-section-heading--compact">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              Tipos de projeto
            </p>
            <div>
              <h2>Comece pelo escopo certo.</h2>
              <p>
                A escada de ofertas permite começar com uma necessidade objetiva
                e evoluir para campanhas, mensuração, integrações e sistemas.
              </p>
            </div>
          </div>

          <div className="engagement-grid">
            {copy.engagements.items.map((item, index) => (
              <article
                key={item.title}
                className={"featured" in item && item.featured ? "is-featured" : undefined}
                data-track="view-pricing"
              >
                <div className="engagement-card__top">
                  <span>0{index + 1}</span>
                  {"featured" in item && item.featured ? (
                    <span className="engagement-marker">MAIS ESCOLHIDO</span>
                  ) : null}
                </div>
                <h3>{item.title}</h3>
                <strong className="engagement-price">{item.price}</strong>
                <small>{copy.engagements.bestFor}: {item.subtitle}</small>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}><Check size={15} />{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--light">
        <div className="enterprise-shell money-page__included">
          <div>
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              Entregáveis
            </p>
            <h2>O que está incluído na base profissional.</h2>
            <p>
              O escopo final varia por projeto, mas a qualidade técnica não é
              tratada como adicional.
            </p>
          </div>
          <ul>
            {included.map((item) => (
              <li key={item}><CircleCheck size={18} />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--paper">
        <div className="enterprise-shell">
          <div className="enterprise-section-heading enterprise-section-heading--compact">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              Projetos publicados
            </p>
            <div>
              <h2>Três setores. Três jornadas comerciais.</h2>
              <p>
                Cases detalhados com decisões, entregáveis, tecnologia observada
                e evidências públicas.
              </p>
            </div>
          </div>

          <div className="money-page__cases">
            {projects.map((project) => (
              <article key={project.slug}>
                <Link
                  href={localeCaseStudy("pt", project.slug)}
                  data-track={`website-service-case-${project.slug}`}
                  data-meta-event="ViewContent"
                >
                  <Image
                    src={project.image}
                    alt={`Projeto ${project.title}`}
                    fill
                    sizes="(min-width: 900px) 33vw, 100vw"
                  />
                </Link>
                <div>
                  <span>{project.sector}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <Link
                    href={localeCaseStudy("pt", project.slug)}
                    data-track={`website-service-case-${project.slug}`}
                    data-meta-event="ViewContent"
                  >
                    Ver estudo de caso
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--light" id="faq">
        <div className="enterprise-shell faq-layout">
          <div>
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              Perguntas frequentes
            </p>
            <h2>Respostas antes da proposta.</h2>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{item.question}<i /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="proposta" className="enterprise-section enterprise-contact scroll-anchor">
        <div className="enterprise-shell enterprise-contact__grid">
          <div className="enterprise-contact__intro">
            <p className="enterprise-kicker">
              <span />
              Próximo passo
            </p>
            <h2>Veja qual site cabe no seu orçamento.</h2>
            <p>
              Informe nome, WhatsApp, tipo de projeto e faixa de investimento.
              O detalhamento acontece na conversa seguinte.
            </p>
            <div className="enterprise-contact__direct">
              <span>Prefere falar agora?</span>
              <a
                href={whatsappLink("Olá, vim pela página de criação de sites da Binah e quero receber uma proposta.")}
                target="_blank"
                rel="noreferrer"
                data-track="website-service-whatsapp"
                data-meta-event="Contact"
              >
                Abrir WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <ContactForm locale="pt" />
        </div>
      </section>

      <nav className="mobile-conversion-bar" aria-label="Contato para criação de site">
        <a
          href={whatsappLink("Olá, vim pela página de criação de sites da Binah e quero receber uma proposta.")}
          target="_blank"
          rel="noreferrer"
          data-track="website-service-mobile-whatsapp"
          data-meta-event="Contact"
        >
          Abrir WhatsApp
        </a>
        <Link href="#proposta" data-track="website-service-mobile-proposal" data-meta-event="Contact">
          Receber proposta
        </Link>
      </nav>
    </div>
  );
}
