import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { VisualFrame } from "@/components/visual-frame";
import { whatsappLink } from "@/lib/site";

type SegmentPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  image: string;
  alt: string;
  whyTitle: string;
  whyText: string;
  whyCards: readonly string[];
  features: readonly {
    title: string;
    text: string;
  }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  faq: readonly {
    question: string;
    answer: string;
  }[];
};

type SegmentLandingPageProps = {
  page: SegmentPageContent;
  whatsappMessage: string;
};

export function SegmentLandingPage({ page, whatsappMessage }: SegmentLandingPageProps) {
  return (
    <>
      <section className="hero-glow relative overflow-hidden border-b border-[#B9A796]/35">
        <div className="absolute inset-0 fine-grid opacity-30" />
        <div className="site-container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow inline-flex items-center gap-2 rounded-[14px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2">
              <ShieldCheck size={16} />
              {page.eyebrow}
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D] sm:text-lg">
              {page.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
              >
                <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
                {page.primaryCta}
              </a>
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#B9A796]/65 bg-white/45 px-5 py-3.5 text-sm font-semibold text-[#2D2D2D] transition hover:border-[#C8A679] hover:bg-[#EFE7DA]"
              >
                Falar no WhatsApp
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <VisualFrame
            src={page.image}
            alt={page.alt}
            priority
            sizes="(min-width: 1024px) 560px, 92vw"
            className="aspect-[16/10]"
          />
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading eyebrow="Por que ter um site" title={page.whyTitle} description={page.whyText} />
            <div className="grid gap-4 sm:grid-cols-2">
              {page.whyCards.map((item) => (
                <article
                  key={item}
                  className="flex min-h-[92px] items-center gap-3 rounded-[18px] border border-[#B9A796]/45 bg-white p-5 shadow-[var(--shadow-card)]"
                >
                  <CheckCircle2 className="shrink-0 text-[#5B331A]" size={22} />
                  <h3 className="text-base font-semibold text-[#1E1E1E]">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#EFE7DA]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Estrutura comercial"
            title="O que a página pode ter"
            description="Cada seção é pensada para explicar a oferta, transmitir segurança e facilitar o próximo contato."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[24px] border border-[#B9A796]/45 bg-[#F8F5ED] p-6 shadow-[var(--shadow-card)]"
              >
                <span className="grid size-11 place-items-center rounded-[14px] bg-[#C8A679]/22 text-[#5B331A]">
                  <ArrowRight size={20} />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#1E1E1E]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space warm-premium-section">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#2D2D2D]">
              {page.ctaText}
            </p>
          </div>
          <div className="rounded-[28px] border border-[#C8A679]/45 bg-[#F8F5ED]/78 p-6 shadow-[var(--shadow-premium)]">
            <p className="font-serif text-2xl font-semibold text-[#1E1E1E]">
              Receba uma orientação inicial.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#2D2D2D]">
              Envie o segmento, região de atuação e o que você precisa vender ou
              apresentar melhor.
            </p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] sm:w-auto"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
              {page.ctaButton}
            </a>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Dúvidas comuns antes de criar a página"
            description="Respostas diretas para entender como uma página comercial pode apoiar sua captação."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[24px] border border-[#B9A796]/45 bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-serif text-xl font-semibold text-[#1E1E1E]">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#B9A796]/65 bg-[#EFE7DA] px-5 py-3.5 text-sm font-semibold text-[#2D2D2D] transition hover:border-[#C8A679] hover:bg-[#F8F5ED]"
            >
              Ver serviços digitais
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
