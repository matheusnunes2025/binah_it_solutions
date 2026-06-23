import { Mail } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import { contact, navItems, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#B9A796]/35 bg-[#EFE7DA]">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <BrandLogo size="md" lightBg />
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#2D2D2D]">
            Sites, anúncios e infraestrutura para empresas.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-[#5B331A]">Páginas</p>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/politica-de-privacidade"
                className="text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase text-[#5B331A]">Segmentos</p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/sites-para-nutricionistas"
                className="text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
              >
                Sites para nutricionistas
              </Link>
              <Link
                href="/infraestrutura-de-ti-para-empresas"
                className="text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
              >
                Infraestrutura de TI
              </Link>
              <Link
                href="/sites-para-engenharia-arquitetura-construtoras"
                className="text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
              >
                Engenharia e arquitetura
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-[#5B331A]">Contato</p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
            >
              <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT Solutions" />
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
            >
              <SocialIcon type="instagram" size={19} label="Instagram da Binah IT Solutions" />
              {contact.instagramHandle}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-[#2D2D2D] transition hover:text-[#5B331A]"
            >
              <Mail size={18} />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#B9A796]/35 px-5 py-5 text-center text-xs text-[#5B331A]">
        Binah IT Solutions — tecnologia para empresas.
      </div>
    </footer>
  );
}
