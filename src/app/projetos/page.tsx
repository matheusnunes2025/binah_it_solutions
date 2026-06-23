import type { Metadata } from "next";
import { ExternalLink, FolderKanban } from "lucide-react";
import { ImageOverlayCard } from "@/components/image-overlay-card";
import { SectionHeading } from "@/components/section-heading";
import { SocialIcon } from "@/components/social-icon";
import { absoluteUrl, buildPageMetadata, serializeJsonLd } from "@/lib/seo";
import { projects, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Projetos digitais | Binah IT Solutions",
  description:
    "Veja projetos de sites e páginas profissionais desenvolvidos para apresentar marcas, organizar serviços e facilitar o contato com clientes.",
  path: "/projetos",
  keywords: [
    "projetos digitais",
    "sites desenvolvidos",
    "portfolio Binah IT Solutions",
    "projetos de sites profissionais",
  ],
});

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/projetos#webpage"),
        url: absoluteUrl("/projetos"),
        name: "Projetos digitais | Binah IT Solutions",
        description:
          "Projetos de sites e páginas profissionais desenvolvidos para apresentar marcas, organizar serviços e facilitar o contato com clientes.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/projetos#itemlist"),
        name: "Projetos digitais da Binah IT Solutions",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.description,
          url: project.href,
        })),
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
        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <p className="eyebrow inline-flex items-center gap-2 rounded-[14px] border border-brand-accent-border bg-brand-accent-soft px-3 py-2">
            <FolderKanban size={16} />
            Projetos digitais
          </p>
          <h1 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
            Sites criados para apresentar melhor e gerar contato.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#2D2D2D] sm:text-lg">
            Cada projeto une visual, clareza e função comercial.
          </p>
        </div>
      </section>

      <section className="section-space bg-[#F8F5ED]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos com objetivo claro."
            description="Apresentar, orientar e conduzir ao contato."
          />

          <div className="mt-10 grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-[28px] border border-[#B9A796]/45 bg-[#EFE7DA]/70 shadow-[var(--shadow-card)] lg:grid-cols-[0.95fr_1.05fr]"
              >
                <ImageOverlayCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  details={project.details}
                  href={project.href}
                  alt={`Captura do projeto ${project.title}`}
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="min-h-80 rounded-none border-0 shadow-none"
                />
                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h2 className="font-serif text-3xl font-semibold text-[#1E1E1E]">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#2D2D2D]">
                      {project.description}
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {project.details.map((detail) => (
                        <div key={detail} className="text-sm leading-6 text-[#2D2D2D]">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-[14px] bg-[#C8A679] px-4 py-3 text-sm font-semibold text-[#1E1E1E] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
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

      <section className="section-space warm-premium-section">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="eyebrow">Novo projeto</p>
            <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1E1E1E] sm:text-5xl">
              Sua marca pode parecer mais profissional.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#2D2D2D]">
              Envie seu segmento e objetivo. Indicamos a melhor estrutura.
            </p>
          </div>
          <div className="rounded-[28px] border border-[#C8A679]/45 bg-[#F8F5ED]/78 p-6 shadow-[var(--shadow-premium)]">
            <p className="font-serif text-2xl font-semibold text-[#1E1E1E]">
              Vamos criar o próximo?
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] sm:w-auto"
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
