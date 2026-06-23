import type { Metadata } from "next";
import { Building2, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialIcon } from "@/components/social-icon";
import { VisualFrame } from "@/components/visual-frame";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import { contact, contactVisual, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato | Binah IT Solutions",
  description:
    "Fale com a Binah IT Solutions para sites profissionais, campanhas de anúncios e infraestrutura de TI para empresas.",
  path: "/contato",
  keywords: [
    "contato Binah IT Solutions",
    "orçamento de site profissional",
    "contato Google Ads",
    "contato Meta Ads",
    "contato infraestrutura de TI",
    "site para empresas",
  ],
});

const contactItems = [
  {
    title: "WhatsApp",
    text: "Resposta direta",
    href: whatsappLink(),
    external: true,
    icon: <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />,
  },
  {
    title: "E-mail",
    text: "Envio de detalhes",
    href: `mailto:${contact.email}`,
    external: false,
    icon: <Mail size={19} />,
  },
  {
    title: "Instagram",
    text: "Conteúdos e exemplos",
    href: contact.instagramUrl,
    external: true,
    icon: <SocialIcon type="instagram" size={20} label="Instagram da Binah IT Solutions" />,
  },
  {
    title: "Atendimento",
    text: "Digital e infraestrutura",
    href: "/servicos",
    external: false,
    icon: <Building2 size={19} />,
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
        name: "Contato | Binah IT Solutions",
        description:
          "Fale com a Binah IT Solutions para sites profissionais, campanhas de anúncios e infraestrutura de TI para empresas.",
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

      <section className="hero-glow relative overflow-hidden border-b border-[#B9A796]/35">
        <div className="absolute inset-0 fine-grid opacity-30" />
        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <p className="eyebrow inline-flex items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2">
            <MessageCircle size={16} />
            Contato Binah IT Solutions
          </p>
          <h1 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
            Vamos entender seu projeto.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D] sm:text-lg">
            Conte o cenário da sua empresa e retornamos com uma direção clara.
          </p>
        </div>
      </section>

      <section className="section-space bg-[#EFE7DA]">
        <div className="site-container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[28px] border border-[#B9A796]/45 bg-[#F8F5ED]/84 p-6 text-[#1E1E1E] shadow-[var(--shadow-premium)] sm:p-8">
            <div className="h-[2px] w-12 bg-[#C8A679]" />
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight">
              Fale com a Binah IT
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">
              Envie seu objetivo: site, anúncios, rede ou estrutura técnica.
            </p>

            <VisualFrame
              src={contactVisual.image}
              alt={contactVisual.alt}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="mt-7 aspect-[4/3]"
            />

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex items-start gap-3 rounded-[18px] border border-[#B9A796]/42 bg-white/72 p-4 transition hover:border-[#C8A679] hover:bg-white"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-[14px] bg-[#C8A679] text-[#180d07]">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#1E1E1E]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#2D2D2D]">
                      {item.text}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
              Chamar no WhatsApp
            </a>

            <div className="mt-8 rounded-[18px] border border-[#C8A679]/35 bg-[#EFE7DA]/72 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-[#C8A679]" size={20} />
                <p className="text-sm leading-7 text-[#2D2D2D]">
                  Para empresas que precisam vender melhor ou organizar a estrutura
                  técnica.
                </p>
              </div>
            </div>
          </aside>

          <div id="formulario" className="scroll-mt-28">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
