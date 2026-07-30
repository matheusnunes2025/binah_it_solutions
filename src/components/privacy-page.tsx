import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  localeConfig,
  localeHome,
  privacyByLocale,
  type Locale,
} from "@/lib/i18n";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = privacyByLocale[locale];

  return (
    <article className="privacy-page" lang={localeConfig[locale].htmlLang}>
      <div className="enterprise-shell privacy-page__inner">
        <Link href={localeHome(locale)} className="privacy-page__back">
          <ArrowLeft size={17} />
          {copy.back}
        </Link>
        <header>
          <span>BINAH / PRIVACY</span>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
          <small>{copy.updated}</small>
        </header>
        <div className="privacy-page__sections">
          {copy.sections.map((section, index) => (
            <section key={section.title}>
              <span>0{index + 1}</span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
