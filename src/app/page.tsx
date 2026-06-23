import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { ImageOverlayCard } from "@/components/image-overlay-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { VisualFrame } from "@/components/visual-frame";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import {
  categoryExamples,
  choiceReasons,
  faqItems,
  homeServiceCards,
  infrastructureHome,
  processVisual,
  processSteps,
  projects,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Binah IT Solutions | Sites, anúncios e infraestrutura de TI",
  description:
    "Sites profissionais, landing pages, Google Ads, Meta Ads e infraestrutura de TI para empresas que precisam de presença digital, captação e estrutura técnica.",
  path: "/",
  keywords: [
    "sites profissionais",
    "landing pages para empresas",
    "Google Ads para empresas",
    "Meta Ads para empresas",
    "infraestrutura de TI para empresas",
    "redes corporativas",
  ],
});

const heroBadges = [
  "Sites",
  "Anúncios",
  "SEO",
  "Infraestrutura",
] as const;

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: absoluteUrl("/"),
        name: "Binah IT Solutions | Sites, anúncios e infraestrutura de TI",
        description:
          "Sites profissionais, landing pages, Google Ads, Meta Ads e infraestrutura de TI para empresas que precisam de presença digital, captação e estrutura técnica.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        about: {
          "@id": absoluteUrl("/#organization"),
        },
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/#faq"),
        mainEntity: faqItems.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }}
      />

      <section className="binahHero">
        <div className="binahHeroContainer">
          <div className="binahHeroContent">
            <p className="binahHeroEyebrow">Tecnologia para empresas</p>

            <h1 className="binahHeroTitle">
              Sites, anúncios e infraestrutura para empresas que precisam{" "}
              <span>crescer com estrutura.</span>
            </h1>

            <p className="binahHeroText">
              Presença digital que gera confiança, captação que cria oportunidades
              e estrutura técnica para sua empresa operar melhor.
            </p>

            <div className="binahHeroActions">
              <Link className="binahHeroPrimaryButton" href="/contato">
                Falar com especialista
              </Link>

              <Link className="binahHeroSecondaryButton" href="/projetos">
                Ver projetos
              </Link>
            </div>

            <div className="binahHeroChips" aria-label="Serviços principais">
              {heroBadges.map((item) => (
                <span className="binahHeroChip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="binahHeroVisual">
            <div className="binahHeroVisualInner">
              <Image
                src="/images/hero-desktop.webp"
                alt="Ilustração minimalista dos serviços da Binah IT Solutions: sites, anúncios, SEO e infraestrutura de TI."
                width={1200}
                height={675}
                priority
                sizes="(max-width: 900px) 0vw, 50vw"
                className="binahHeroImage"
              />

              <Image
                src="/images/hero-mobile.webp"
                alt="Ilustração minimalista dos serviços da Binah IT Solutions para mobile."
                width={900}
                height={1600}
                priority
                sizes="(max-width: 900px) 100vw, 0vw"
                className="binahHeroImageMobile"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Soluções Binah IT"
              title="Serviços essenciais para sua empresa operar e vender melhor."
              description="Unimos site, tráfego e infraestrutura para fortalecer sua apresentação, captação e operação."
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceCards.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[28px] border border-[#B9A796]/45 bg-[#F8F5ED] shadow-[0_18px_55px_rgba(30,30,30,0.08)]"
              >
                <VisualFrame
                  src={service.image}
                  alt={service.alt}
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="aspect-[16/10] rounded-none border-0 shadow-none"
                  framed={false}
                />
                <div className="bg-[#F8F5ED] p-6">
                  <span className="mb-5 block h-1 w-12 rounded-full bg-[#C8A679]" />
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[#1E1E1E]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#2D2D2D]/85">
                    {service.description}
                  </p>
                  <div className="mt-5 grid gap-2">
                    {service.points.map((point) => (
                      <div key={point} className="flex gap-2 text-sm leading-6 text-[#2D2D2D]">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[#5B331A]" size={17} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5B331A] transition hover:text-[#1E1E1E]"
                  >
                    Saiba mais
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space warm-premium-section">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={infrastructureHome.eyebrow}
                title={infrastructureHome.title}
                description={infrastructureHome.description}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(
                    "Olá, vim pelo site da Binah IT Solutions e preciso organizar a infraestrutura de TI da minha empresa."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
                >
                  <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
                  {infrastructureHome.ctaButton}
                </a>
                <Link
                  href="/infraestrutura-de-ti-para-empresas"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#B9A796]/65 bg-white/45 px-5 py-3.5 text-sm font-semibold text-[#2D2D2D] transition hover:border-[#C8A679] hover:bg-[#EFE7DA]"
                >
                  Ver infraestrutura
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {infrastructureHome.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-[#B9A796]/45 bg-[#F8F5ED]/88 p-6 shadow-[var(--shadow-card)]"
                >
                  <ShieldCheck className="text-[#5B331A]" size={24} />
                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#1E1E1E]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#2D2D2D]/85">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 rounded-[28px] border border-[#C8A679]/45 bg-[#F8F5ED]/78 p-6 shadow-[var(--shadow-premium)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-8">
            <VisualFrame
              src="/images/binah-infraestrutura-redes-empresas-3d.webp"
              alt="Imagem 3D minimalista representando infraestrutura de TI e redes corporativas para empresas."
              sizes="(min-width: 1024px) 430px, 100vw"
              className="aspect-[16/10] rounded-[20px]"
            />
            <div>
              <p className="font-serif text-2xl font-semibold text-[#1E1E1E]">
                {infrastructureHome.ctaTitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">
                {infrastructureHome.ctaText}
              </p>
              <a
                href={whatsappLink(
                  "Olá, vim pelo site da Binah IT Solutions e quero solicitar uma avaliação técnica de infraestrutura."
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] sm:w-auto"
              >
                <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
                Solicitar avaliação
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="segmentsSection bg-[#F8F5ED] py-16 md:py-24">
        <div className="segmentsContainer site-container">
          <div className="segmentsHeader mb-8 max-w-3xl md:mb-10">
            <p className="segmentsEyebrow eyebrow">Para quem é</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#1E1E1E] sm:text-4xl">
              Segmentos que precisam de presença e estrutura.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#2D2D2D] sm:text-lg">
              Sites, anúncios e infraestrutura para empresas que precisam transmitir confiança
              antes do primeiro contato.
            </p>
          </div>

          <div className="segmentsGrid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryExamples.map((item) => (
              <article
                className="segmentCard overflow-hidden rounded-[28px] border border-[#B9A796]/45 bg-[#F8F5ED] shadow-[var(--shadow-card)]"
                key={item.title}
              >
                <div
                  className="segmentImageWrap relative overflow-hidden bg-[#EFE7DA]"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={750}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="segmentImage"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="segmentContent bg-[#F8F5ED] p-5">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#2D2D2D]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space warm-premium-section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Como funciona"
              title="Processo claro, sem complicação."
              description="Entendemos o cenário, organizamos a solução e colocamos em prática."
            />
            <VisualFrame
              src={processVisual.image}
              alt={processVisual.alt}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="mt-8 aspect-[4/3]"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card p-5">
                <span className="grid size-11 place-items-center rounded-[14px] bg-[#EFE7DA] text-sm font-semibold text-[#5B331A]">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#1E1E1E]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="section-space scroll-mt-24 bg-[#F8F5ED]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Projetos"
            title="Projetos com função comercial."
            description="Sites pensados para apresentar, orientar e gerar contato."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-[8px] border border-[#B9A796]/45 bg-[#EFE7DA]/70 shadow-[var(--shadow-card)] md:grid-cols-[0.95fr_1.05fr]"
              >
                <ImageOverlayCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  details={project.details}
                  href={project.href}
                  alt={`Captura do projeto ${project.title}`}
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="min-h-72 rounded-none border-0 shadow-none"
                />
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1E1E1E]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">
                      {project.description}
                    </p>
                    <div className="mt-5 grid gap-2">
                      {project.details.slice(0, 3).map((detail) => (
                        <div key={detail} className="flex gap-2 text-sm text-[#2D2D2D]">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-[#5B331A]" size={17} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-[8px] border border-[#C8A679] px-4 py-3 text-sm font-semibold text-[#5B331A] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
                  >
                    Ver projeto
                    <ExternalLink size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#EFE7DA]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Por que escolher a Binah IT"
            title="Design precisa vender confiança."
            description="Cada página, botão e seção deve ajudar o cliente a avançar."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {choiceReasons.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-[#B9A796]/45 bg-[#F8F5ED] p-6 shadow-[var(--shadow-card)]"
              >
                <Sparkles className="text-[#5B331A]" size={26} />
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#1E1E1E]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Perguntas rápidas."
            description="Respostas diretas para decidir com mais clareza."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[8px] border border-[#B9A796]/45 bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-serif text-xl font-semibold text-[#1E1E1E]">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-t border-[#B9A796]/30 bg-[#EFE7DA]">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl">
              Sua empresa pode transmitir mais confiança.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D]">
              Conte seu cenário e indicamos o melhor caminho para site, anúncios ou
              infraestrutura.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#C8A679]/45 bg-[#F8F5ED]/78 p-6 shadow-[var(--shadow-premium)]">
            <Target className="text-[#C8A679]" size={32} />
            <p className="mt-5 font-serif text-2xl font-semibold text-[#1E1E1E]">
              Vamos começar?
            </p>
            <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">
              Mais clareza para vender. Mais estrutura para operar.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] sm:w-auto"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
