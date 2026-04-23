import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ExternalLink,
  Eye,
  Globe2,
  MapPin,
  Megaphone,
  Monitor,
  MousePointerClick,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { ImageOverlayCard } from "@/components/image-overlay-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import {
  categoryExamples,
  contact,
  heroVisual,
  projects,
  services,
  type ServiceSlug,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Criacao de sites, Google Meu Negocio e anuncios",
  description:
    "Binah IT desenvolve sites profissionais, landing pages, Google Meu Negocio, Google Ads e Meta Ads para empresas que querem aparecer melhor no Google e captar novos clientes.",
  path: "/",
  keywords: [
    "criacao de sites",
    "landing pages para empresas",
    "google meu negocio para empresas",
    "gestao de google ads",
    "gestao de meta ads",
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

const faqItems = [
  {
    question: "Por que minha empresa precisa de um site profissional?",
    answer:
      "Porque o site ajuda sua empresa a transmitir confianca, aparecer melhor nas pesquisas e transformar interesse em contato com mais clareza.",
  },
  {
    question: "Google Meu Negocio ajuda a captar clientes?",
    answer:
      "Sim. Uma presenca local bem organizada facilita que a empresa seja encontrada, comparada e acionada quando alguem pesquisa no Google.",
  },
  {
    question: "Quando faz sentido anunciar no Google Ads?",
    answer:
      "Quando voce quer aparecer para pessoas que ja estao procurando pelo seu servico e precisam encontrar uma opcao confiavel para chamar.",
  },
  {
    question: "Meta Ads serve para quais tipos de negocio?",
    answer:
      "Serve para negocios que precisam gerar reconhecimento, despertar interesse e abrir novas conversas com publico certo no Instagram e Facebook.",
  },
] as const;

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: absoluteUrl("/"),
        name: "Binah IT | Criacao de sites, Google Meu Negocio e anuncios",
        description:
          "Binah IT desenvolve sites profissionais, landing pages, Google Meu Negocio, Google Ads e Meta Ads para empresas que querem captar novos clientes.",
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
      <section className="hero-glow relative overflow-hidden border-b border-white/10 bg-brand-bg">
        <div className="absolute inset-0 fine-grid opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(13,18,25,0.98)_0%,rgba(13,18,25,0.84)_54%,rgba(255,107,26,0.12)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent-strong">
              <Search size={16} />
              Sites, Google e anuncios
            </p>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
              Binah IT
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-stone-100 sm:text-3xl">
              Presenca digital de alto padrao para empresas que querem ser
              encontradas, escolhidas e chamadas.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              Eu desenvolvo sites profissionais, landing pages, Google Meu
              Negocio, Google Ads e Meta Ads para transformar busca, visita e
              interesse em conversa comercial.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-brand-accent px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong"
              >
                <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT" />
                Quero atrair mais clientes
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/[0.02] px-5 py-3.5 text-sm font-semibold text-stone-50 transition hover:border-brand-accent-border hover:bg-white/[0.05] hover:text-white"
              >
                Ver servicos
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                "Site premium e responsivo",
                "Google e anuncios alinhados",
                "Contato rapido pelo WhatsApp",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-stone-300"
                >
                  <CheckCircle2 className="text-emerald-300" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-[620px] overflow-hidden rounded-[8px] border border-white/10 bg-brand-panel shadow-2xl shadow-black/50">
              <ImageOverlayCard
                image={heroVisual.image}
                title={heroVisual.title}
                description={heroVisual.description}
                eyebrow="Banner criado com IA"
                details={heroVisual.details}
                alt="Banner premium de estrategia digital da Binah IT"
                priority
                sizes="(min-width: 1024px) 620px, 90vw"
                className="aspect-[16/10]"
              />
            </div>

            <div className="absolute -bottom-5 left-0 right-0 mx-auto w-[92%] rounded-[8px] border border-brand-accent-border bg-brand-surface/96 p-4 shadow-xl shadow-black/40 sm:left-auto sm:right-0 sm:w-80">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-emerald-400/12 text-emerald-200">
                  <TrendingUp size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-stone-50">
                    Clique na imagem para ver detalhes.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-stone-400">
                    O novo banner usa IA para comunicar tecnologia, autoridade e
                    intencao comercial sem ficar generico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Credibilidade imediata",
              text: "Um site bem construido reduz duvida e passa seguranca antes do primeiro contato.",
            },
            {
              icon: MapPin,
              title: "Presenca no Google",
              text: "Sua empresa precisa aparecer com clareza quando o cliente pesquisa uma solucao.",
            },
            {
              icon: MousePointerClick,
              title: "Jornada para acao",
              text: "Pagina, anuncio e CTA precisam conduzir o visitante para chamar sem friccao.",
            },
            {
              icon: Globe2,
              title: "Operacao mais completa",
              text: "Site, Google e anuncios trabalhando juntos geram uma base comercial mais forte.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
            >
              <item.icon className="text-brand-accent-strong" size={26} />
              <h2 className="mt-5 text-lg font-semibold text-stone-50">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-bg px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="O que a Binah IT faz"
              title="Seu digital precisa unir site, Google e anuncios na mesma direcao."
              description="A estrutura e pensada para o cliente entender sua oferta, confiar no seu negocio e encontrar o caminho mais simples para falar com voce."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                      eyebrow="Servico Binah IT"
                      details={service.details}
                      alt={`Imagem do servico ${service.title}`}
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[16/10]"
                    />
                    <div className="p-6">
                      <Icon className="text-brand-accent-strong" size={28} />
                      <h3 className="mt-6 text-xl font-semibold text-stone-50">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-stone-400">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-20 text-brand-paper-ink sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
                Exemplos por categoria
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Visual forte para o cliente sentir profissionalismo antes de
                pedir orcamento.
              </h2>
            </div>
            <p className="text-base leading-8 text-brand-paper-muted">
              As imagens abaixo mostram caminhos visuais para diferentes tipos
              de negocio. O projeto final e adaptado a marca, publico e servico
              de cada cliente.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {categoryExamples.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(24,19,17,0.08)]"
              >
                <ImageOverlayCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  eyebrow="Exemplo de banner"
                  details={item.details}
                  alt={`Exemplo visual para ${item.title}`}
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="aspect-[4/3]"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-paper-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Respostas objetivas para quem quer usar o digital para captar clientes."
            description="Sem promessa vazia: aqui esta o papel de cada frente dentro de uma estrategia comercial mais forte."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
              >
                <h3 className="text-lg font-semibold text-stone-50">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projetos desenvolvidos"
            title="Dois trabalhos reais, com foco em apresentacao profissional e contato claro."
            description="Sem numeros inventados e sem promessas magicas: o objetivo e construir uma presenca digital que ajude o cliente certo a entender, confiar e chamar."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:grid-cols-[0.95fr_1.05fr]"
              >
                <ImageOverlayCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  eyebrow="Projeto publicado"
                  details={project.details}
                  href={project.href}
                  ctaLabel="Ver projeto publicado"
                  alt={`Captura do projeto ${project.title}`}
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="min-h-64"
                />
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-stone-50">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-stone-400">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-[8px] border border-brand-accent-border px-4 py-3 text-sm font-semibold text-brand-accent-strong transition hover:bg-brand-accent hover:text-[#180d07]"
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

      <section className="border-t border-white/10 bg-brand-surface-strong px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent-strong">
              Decisao simples
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-stone-50 sm:text-5xl">
              Se sua empresa ainda depende so de indicacao, o Google pode virar
              seu proximo canal de chegada.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
              O cliente pesquisa, compara e chama quem transmite confianca. A
              Binah IT organiza essa presenca para sua empresa parecer tao
              profissional no digital quanto no atendimento.
            </p>
          </div>

          <div className="rounded-[8px] border border-brand-accent-border bg-brand-accent-soft p-6">
            <Eye className="text-brand-accent-strong" size={32} />
            <p className="mt-5 text-2xl font-semibold text-stone-50">
              Quer saber como sua empresa pode aparecer melhor?
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              Chame no WhatsApp e envie seu segmento. A conversa comeca pelo que
              voce vende, por onde quer captar e pelo tipo de cliente que quer
              atrair.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand-accent px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong sm:w-auto"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT" />
              Falar agora: {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
