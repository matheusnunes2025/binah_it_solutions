import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleCheck,
  ExternalLink,
} from "lucide-react";
import {
  localeCaseStudy,
  localeConfig,
  localeHome,
  localePortfolio,
  type Locale,
} from "@/lib/i18n";
import {
  portfolioByLocale,
  portfolioUiByLocale,
  type PortfolioProject,
} from "@/lib/portfolio";
import { absoluteUrl, serializeJsonLd } from "@/lib/seo";

export function PortfolioCollection({ locale }: { locale: Locale }) {
  const ui = portfolioUiByLocale[locale];
  const projects = portfolioByLocale[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(localePortfolio(locale))}#collection`,
    url: absoluteUrl(localePortfolio(locale)),
    name: ui.collectionTitle,
    description: ui.collectionDescription,
    inLanguage: localeConfig[locale].htmlLang,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: absoluteUrl(localeCaseStudy(locale, project.slug)),
      })),
    },
  };

  return (
    <div id="top" lang={localeConfig[locale].htmlLang} className="enterprise-site portfolio-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <header className="portfolio-hero">
        <div className="enterprise-shell">
          <p className="enterprise-kicker">
            <span />
            {ui.collectionEyebrow}
          </p>
          <h1>{ui.collectionTitle}</h1>
          <p>{ui.collectionDescription}</p>
        </div>
      </header>

      <section className="enterprise-section enterprise-section--paper">
        <div className="enterprise-shell portfolio-list">
          {projects.map((project, index) => (
            <article className="portfolio-list__card" key={project.slug}>
              <Link
                href={localeCaseStudy(locale, project.slug)}
                className="portfolio-list__image"
                aria-label={`${ui.caseLink}: ${project.title}`}
                data-track={`portfolio-case-${project.slug}`}
                data-meta-event="ViewContent"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website`}
                  fill
                  sizes="(min-width: 960px) 54vw, 100vw"
                />
                <span>0{index + 1}</span>
              </Link>
              <div className="portfolio-list__content">
                <p>{project.sector}</p>
                <h2>{project.title}</h2>
                <div>{project.summary}</div>
                <ul>
                  {project.deliverables.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="portfolio-list__actions">
                  <Link
                    href={localeCaseStudy(locale, project.slug)}
                    data-track={`portfolio-case-${project.slug}`}
                    data-meta-event="ViewContent"
                  >
                    {ui.caseLink}
                    <ArrowUpRight size={17} />
                  </Link>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {ui.live}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function CaseStudyPage({
  locale,
  project,
}: {
  locale: Locale;
  project: PortfolioProject;
}) {
  const ui = portfolioUiByLocale[locale];
  const path = localeCaseStudy(locale, project.slug);
  const home = localeHome(locale);
  const portfolio = localePortfolio(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(path)}#case-study`,
        url: absoluteUrl(path),
        name: `${project.title} — Binah IT Solutions`,
        description: project.summary,
        inLanguage: localeConfig[locale].htmlLang,
        image: absoluteUrl(project.image),
        about: {
          "@type": "WebSite",
          name: project.title,
          url: project.liveUrl,
        },
        creator: { "@id": `${absoluteUrl("/")}#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Binah IT Solutions",
            item: absoluteUrl(home),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: ui.collectionEyebrow,
            item: absoluteUrl(portfolio),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: absoluteUrl(path),
          },
        ],
      },
    ],
  };

  return (
    <article id="top" lang={localeConfig[locale].htmlLang} className="enterprise-site case-study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <header className="case-study__hero">
        <div className="enterprise-shell">
          <Link href={portfolio} className="case-study__back">
            <ArrowLeft size={16} />
            {ui.back}
          </Link>
          <div className="case-study__hero-grid">
            <div>
              <p className="enterprise-kicker">
                <span />
                {ui.eyebrow}
              </p>
              <div className="case-study__sector">{project.sector}</div>
              <h1>{project.title}</h1>
              <p>{project.summary}</p>
              <div className="case-study__hero-actions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  {ui.live}
                  <ExternalLink size={17} />
                </a>
                <Link href={`${home}#contact`}>
                  {ui.ctaButton}
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
            <div className="case-study__visual">
              <Image
                src={project.image}
                alt={`${project.title} website project`}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="enterprise-section enterprise-section--light">
        <div className="enterprise-shell case-study__brief">
          <div>
            <span>01</span>
            <p>{ui.challenge}</p>
            <h2>{project.challenge}</h2>
          </div>
          <div>
            <span>02</span>
            <p>{ui.objective}</p>
            <h2>{project.objective}</h2>
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--paper">
        <div className="enterprise-shell">
          <div className="case-study__section-heading">
            <p className="enterprise-kicker enterprise-kicker--dark">
              <span />
              {ui.decisions}
            </p>
            <h2>{project.title}</h2>
          </div>
          <div className="case-study__decision-grid">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>0{index + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-section--dark">
        <div className="enterprise-shell case-study__delivery">
          <div>
            <p className="enterprise-kicker">
              <span />
              {ui.deliverables}
            </p>
            <h2>{ui.evidence}</h2>
            <p>{ui.evidenceNote}</p>
          </div>
          <div className="case-study__lists">
            <ul>
              {project.deliverables.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              {project.evidence.map((item) => (
                <li key={item}>
                  <CircleCheck size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="case-study__technology">
        <div className="enterprise-shell">
          <p>{ui.technology}</p>
          <div>
            {project.technology.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section enterprise-contact case-study__cta">
        <div className="enterprise-shell">
          <p className="enterprise-kicker">
            <span />
            {ui.ctaEyebrow}
          </p>
          <h2>{ui.ctaTitle}</h2>
          <p>{ui.ctaText}</p>
          <Link href={`${home}#contact`}>
            {ui.ctaButton}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </article>
  );
}
