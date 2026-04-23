import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Clock3, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialIcon } from "@/components/social-icon";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import { contact, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato para site, Google Meu Negocio e anuncios",
  description:
    "Entre em contato com a Binah IT para solicitar criacao de site, landing page, Google Meu Negocio, Google Ads ou Meta Ads.",
  path: "/contato",
  keywords: [
    "contato criacao de site",
    "orcamento site profissional",
    "contato google meu negocio",
    "contato google ads",
    "contato meta ads",
  ],
});

const contactCards = [
  {
    href: whatsappLink(),
    label: "WhatsApp",
    value: contact.phoneDisplay,
    icon: <SocialIcon type="whatsapp" size={21} label="WhatsApp da Binah IT" />,
    iconClassName: "bg-brand-accent text-[#180d07]",
    cardClassName: "",
    valueClassName: "text-sm text-stone-400 sm:text-[15px]",
    external: true,
  },
  {
    href: contact.instagramUrl,
    label: "Instagram",
    value: contact.instagramHandle,
    icon: <SocialIcon type="instagram" size={22} label="Instagram da Binah IT" />,
    iconClassName: "bg-brand-accent-soft text-brand-accent-strong",
    cardClassName: "",
    valueClassName: "text-sm text-stone-400 sm:text-[15px]",
    external: true,
  },
  {
    href: `mailto:${contact.email}`,
    label: "E-mail",
    value: contact.email,
    icon: <Mail size={18} />,
    iconClassName: "bg-brand-accent-soft text-brand-accent-strong",
    cardClassName: "sm:col-span-2",
    valueClassName: "break-all text-sm text-stone-400 sm:text-[15px]",
    external: false,
  },
] as const;

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": absoluteUrl("/contato#webpage"),
        url: absoluteUrl("/contato"),
        name: "Contato Binah IT",
        description:
          "Pagina de contato da Binah IT para solicitar criacao de site, Google Meu Negocio, Google Ads e Meta Ads.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/contato#breadcrumb"),
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
            name: "Contato",
            item: absoluteUrl("/contato"),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(contactJsonLd) }}
      />
      <section className="hero-glow relative overflow-hidden border-b border-white/10 bg-brand-bg px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="absolute inset-0 fine-grid opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(13,18,25,0.96),rgba(13,18,25,0.82),rgba(255,107,26,0.14))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent-strong">
              <MessageCircle size={16} />
              Contato direto
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-tight text-stone-50 sm:text-6xl">
              Vamos transformar sua presenca digital em um canal de novos contatos.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              Envie uma mensagem com o tipo de negocio, o servico que voce quer vender
              melhor e o que ja existe hoje. A conversa pode seguir por WhatsApp ou e-mail.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactCards.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className={`flex min-h-[96px] items-center gap-3 rounded-[8px] border border-white/10 bg-brand-surface/72 p-4 transition hover:border-brand-accent-border ${item.cardClassName}`}
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-[8px] ${item.iconClassName}`}>
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-stone-50">
                      {item.label}
                    </span>
                    <span className={`mt-1 block leading-5 ${item.valueClassName}`}>
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[8px] border border-white/10 bg-stone-900 shadow-2xl shadow-black/40">
            <Image
              src="/images/matheus-binah-it.png"
              alt="Profissional da Binah IT"
              fill
              priority
              sizes="(min-width: 1024px) 440px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(13,18,25,0.86)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent-strong">
                Binah IT
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                Site, anuncios e Google com direcao comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent-strong">
              Formulario rapido
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-50 sm:text-4xl">
              Envie o contexto e eu recebo sua solicitacao direto no e-mail.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              O formulario organiza seus dados para eu receber nome, e-mail,
              WhatsApp, servico e contexto do negocio de forma clara.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Building2,
                  title: "Para empresas e profissionais",
                  text: "Ideal para quem vende servico, atendimento, projeto ou solucao local.",
                },
                {
                  icon: Clock3,
                  title: "Recebimento direto",
                  text: "A solicitacao chega no e-mail com os dados organizados para eu responder com mais rapidez.",
                },
                {
                  icon: Mail,
                  title: "Mensagem organizada",
                  text: "Nome, e-mail, WhatsApp, servico, autorizacao e contexto chegam bem estruturados para resposta.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-white/10 text-brand-accent-strong">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-stone-50">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-stone-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
