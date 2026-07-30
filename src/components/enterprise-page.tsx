import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CircleCheck,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  Network,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { getCopy, localeConfig, localeHome, type Locale } from "@/lib/i18n";
import { absoluteUrl, serializeJsonLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

const serviceIcons = [Globe2, BarChart3, Network] as const;
const differenceIcons = [ScanSearch, Layers3, BarChart3, Code2] as const;

const whatsappMessages: Record<Locale, string> = {
  en: "Hello, I came from the Binah IT Solutions website and would like to discuss a company project.",
  pt: "Olá, vim pelo site da Binah IT Solutions e quero conversar sobre um projeto para minha empresa.",
  es: "Hola, llegué desde el sitio de Binah IT Solutions y quiero conversar sobre un proyecto para mi empresa.",
};

export function EnterprisePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const home = localeHome(locale);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(home)}#webpage`,
        url: absoluteUrl(home),
        name: copy.metadata.title,
        description: copy.metadata.description,
        inLanguage: localeConfig[locale].htmlLang,
        isPartOf: { "@id": `${absoluteUrl("/")}#website` },
        about: { "@id": `${absoluteUrl("/")}#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(home)}#faq-schema`,
        inLanguage: localeConfig[locale].htmlLang,
        mainEntity: copy.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div id="top" lang={localeConfig[locale].htmlLang} className="enterprise-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }}
      />

      <section className="enterprise-hero" aria-labelledby="hero-title">
        <div className="enterprise-hero__ambient enterprise-hero__ambient--one" />
        <div className="enterprise-hero__ambient enterprise-hero__ambient--two" />

        <div className="enterprise-shell enterprise-hero__grid">
          <div className="enterprise-hero__content">
            <p className="enterprise-kicker">
              <span />
              {copy.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {copy.hero.title} <em>{copy.hero.accent}</em>
            </h1>
            <p className="enterprise-hero__description">{copy.hero.description}</p>

            <div className="enterprise-hero__actions">
              <Link
                href="#contact"
                className="enterprise-button enterprise-button--light"
                data-track="hero-assessment"
                data-meta-event="Contact"
              >
                {copy.hero.primaryCta}
                <ArrowUpRight size={18} />
              </Link>
              <Link href="#work" className="enterprise-text-link">
                {copy.hero.secondaryCta}
                <ArrowDownRight size={17} />
              </Link>
            </div>
            <p className="enterprise-hero__note">
              <ShieldCheck size={16} />
              {copy.hero.note}
            </p>
          </div>

          <div className="system-console" aria-label={copy.hero.panelTitle}>
            <div className="system-console__topbar">
              <span>{copy.hero.panelLabel}</span>
              <span className="system-console__status">
                <i />
                {copy.hero.panelStatus}
              </span>
            </div>
            <div className="system-console__body">
              <div className="system-console__heading">
                <span>BINAH / 01</span>
                <h2>{copy.hero.panelTitle}</h2>
              </div>
              <div className="system-console__nodes">
                {copy.hero.panelItems.map((item, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <div className="system-node" key={item.label}>
                      <span className="system-node__icon"><Icon size={19} /></span>
                      <span>
                        <small>{item.label}</small>
                        <strong>{item.value}</strong>
                      </span>
                      <CircleCheck size={17} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="system-console__footer">
              <span>{copy.hero.panelFooter}</span>
              <span className="system-console__pulse" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-rail" aria-label={copy.trust.lead}>
        <div className="enterprise-shell trust-rail__inner">
          <p>{copy.trust.lead}</p>
          <div>
            {copy.trust.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="enterprise-section enterprise-section--light scroll-anchor">
        <div className="enterprise-shell">
          <div className="enterprise-section-heading">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              {copy.services.eyebrow}
            </p>
            <div>
              <h2>{copy.services.title}</h2>
              <p>{copy.services.description}</p>
            </div>
          </div>

          <div className="service-stack">
            {copy.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-row" key={service.title}>
                  <div className="service-row__number">{service.number}</div>
                  <div className="service-row__icon"><Icon size={25} /></div>
                  <div className="service-row__main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <strong>{service.result}</strong>
                  </div>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}><Check size={15} />{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="enterprise-section enterprise-section--paper scroll-anchor">
        <div className="enterprise-shell">
          <div className="enterprise-section-heading enterprise-section-heading--compact">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              {copy.work.eyebrow}
            </p>
            <div>
              <h2>{copy.work.title}</h2>
              <p>{copy.work.description}</p>
            </div>
          </div>

          <div className="work-grid">
            {copy.work.projects.map((project, index) => (
              <article className="work-card" key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="work-card__image"
                  aria-label={`${copy.work.view}: ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} website project`}
                    fill
                    sizes="(min-width: 1000px) 50vw, 100vw"
                  />
                  <span>0{index + 1}</span>
                </a>
                <div className="work-card__content">
                  <div className="work-card__meta">
                    <span>{project.sector}</span>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {copy.work.view}<ExternalLink size={15} />
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="work-card__focus">
                    <small>{copy.work.focusLabel}</small>
                    <div>
                      {project.focus.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--dark">
        <div className="enterprise-shell">
          <div className="enterprise-section-heading enterprise-section-heading--inverse">
            <p className="enterprise-kicker">
              <span />
              {copy.difference.eyebrow}
            </p>
            <div>
              <h2>{copy.difference.title}</h2>
              <p>{copy.difference.description}</p>
            </div>
          </div>

          <div className="difference-grid">
            {copy.difference.items.map((item, index) => {
              const Icon = differenceIcons[index];
              return (
                <article key={item.title}>
                  <span><Icon size={22} /></span>
                  <small>0{index + 1}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="enterprise-section enterprise-section--light scroll-anchor">
        <div className="enterprise-shell approach-layout">
          <div className="approach-intro">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              {copy.process.eyebrow}
            </p>
            <h2>{copy.process.title}</h2>
            <p>{copy.process.description}</p>
            <div className="approach-seal" aria-hidden="true">
              <div><span>BINAH</span><small>CLARITY / SYSTEM / DELIVERY</small></div>
            </div>
          </div>
          <ol className="process-list">
            {copy.process.steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
                <ArrowDownRight size={21} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--paper">
        <div className="enterprise-shell">
          <div className="enterprise-section-heading enterprise-section-heading--compact">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              {copy.engagements.eyebrow}
            </p>
            <div>
              <h2>{copy.engagements.title}</h2>
              <p>{copy.engagements.description}</p>
            </div>
          </div>

          <div className="engagement-grid">
            {copy.engagements.items.map((item, index) => (
              <article
                key={item.title}
                className={'featured' in item && item.featured ? "is-featured" : undefined}
              >
                <div className="engagement-card__top">
                  <span>0{index + 1}</span>
                  {'featured' in item && item.featured ? <span className="engagement-marker">BINAH / CORE</span> : null}
                </div>
                <h3>{item.title}</h3>
                <small>{copy.engagements.bestFor}: {item.subtitle}</small>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}
                </ul>
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
              {copy.faq.eyebrow}
            </p>
            <h2>{copy.faq.title}</h2>
          </div>
          <div className="faq-list">
            {copy.faq.items.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{item.question}<i /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="enterprise-section enterprise-contact scroll-anchor">
        <div className="enterprise-shell enterprise-contact__grid">
          <div className="enterprise-contact__intro">
            <p className="enterprise-kicker">
              <span />
              {copy.contact.eyebrow}
            </p>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.description}</p>
            <div className="enterprise-contact__promise">
              <h3>{copy.contact.promiseTitle}</h3>
              <ul>
                {copy.contact.promiseItems.map((item) => (
                  <li key={item}><CircleCheck size={17} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="enterprise-contact__direct">
              <span>{copy.contact.direct}</span>
              <a
                href={whatsappLink(whatsappMessages[locale])}
                target="_blank"
                rel="noreferrer"
                data-track="contact-whatsapp"
                data-meta-event="Contact"
              >
                {copy.contact.whatsapp}<ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
