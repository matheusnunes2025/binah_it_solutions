"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import {
  getCopy,
  localeConfig,
  localeFromPathname,
  localeHome,
  type Locale,
} from "@/lib/i18n";

const localeOrder: Locale[] = ["en", "pt", "es"];

export function SiteHeader() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = getCopy(locale);
  const home = localeHome(locale);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = localeConfig[locale].htmlLang;
  }, [locale]);

  const nav = [
    { href: `${home}#expertise`, label: copy.nav.services },
    { href: `${home}#work`, label: copy.nav.work },
    { href: `${home}#approach`, label: copy.nav.approach },
    { href: `${home}#contact`, label: copy.nav.contact },
  ];

  return (
    <header className="enterprise-header">
      <div className="enterprise-shell enterprise-header__inner">
        <Link href={home} className="enterprise-brand" aria-label="Binah IT Solutions">
          <BrandLogo size="sm" />
        </Link>

        <nav className="enterprise-nav" aria-label={copy.nav.label}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="enterprise-header__actions">
          <div className="language-switcher" aria-label={copy.nav.languages}>
            {localeOrder.map((item) => (
              <Link
                key={item}
                href={localeHome(item)}
                hrefLang={localeConfig[item].htmlLang}
                aria-label={localeConfig[item].name}
                aria-current={locale === item ? "page" : undefined}
                className={locale === item ? "is-active" : undefined}
              >
                {localeConfig[item].label}
              </Link>
            ))}
          </div>

          <Link
            href={`${home}#contact`}
            className="enterprise-button enterprise-button--small"
            data-track="header-cta"
            data-meta-event="Contact"
          >
            {copy.nav.cta}
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="enterprise-menu-button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? copy.nav.menuClose : copy.nav.menuOpen}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="enterprise-mobile-menu">
          <nav className="enterprise-shell" aria-label={copy.nav.label}>
            {nav.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
            <div className="enterprise-mobile-menu__bottom">
              <div className="language-switcher language-switcher--mobile">
                {localeOrder.map((item) => (
                  <Link
                    key={item}
                    href={localeHome(item)}
                    hrefLang={localeConfig[item].htmlLang}
                    aria-current={locale === item ? "page" : undefined}
                    className={locale === item ? "is-active" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {localeConfig[item].name}
                  </Link>
                ))}
              </div>
              <Link
                href={`${home}#contact`}
                className="enterprise-button"
                onClick={() => setIsOpen(false)}
                data-track="mobile-header-cta"
                data-meta-event="Contact"
              >
                {copy.nav.cta}
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
