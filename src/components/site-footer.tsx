"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import {
  getCopy,
  localeFromPathname,
  localeHome,
  localePrivacy,
} from "@/lib/i18n";
import { contact, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  const locale = localeFromPathname(usePathname());
  const copy = getCopy(locale);
  const home = localeHome(locale);
  const year = new Date().getFullYear();

  const nav = [
    { href: `${home}#expertise`, label: copy.nav.services },
    { href: `${home}#work`, label: copy.nav.work },
    { href: `${home}#approach`, label: copy.nav.approach },
    { href: `${home}#contact`, label: copy.nav.contact },
  ];

  return (
    <footer className="enterprise-footer">
      <div className="enterprise-shell enterprise-footer__grid">
        <div className="enterprise-footer__brand">
          <Link href={home} aria-label="Binah IT Solutions">
            <BrandLogo size="md" />
          </Link>
          <p>{copy.footer.line}</p>
        </div>

        <div>
          <p className="enterprise-footer__label">{copy.footer.navigation}</p>
          <nav className="enterprise-footer__links">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={localePrivacy(locale)}>{copy.footer.privacy}</Link>
          </nav>
        </div>

        <div>
          <p className="enterprise-footer__label">{copy.footer.contact}</p>
          <div className="enterprise-footer__links enterprise-footer__links--contact">
            <a href={`mailto:${contact.email}`}>
              <Mail size={16} />
              {contact.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              data-track="footer-whatsapp"
              data-meta-event="Contact"
            >
              <SocialIcon type="whatsapp" size={17} label="WhatsApp" />
              {contact.phoneDisplay}
            </a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
              <SocialIcon type="instagram" size={17} label="Instagram" />
              {contact.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="enterprise-shell enterprise-footer__bottom">
        <span>© {year} {copy.footer.rights}</span>
        <a href="#top">
          Top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
