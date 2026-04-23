import { Mail } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import { contact, navItems, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo size="md" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-400">
            Presenca digital pensada para gerar confianca, facilitar o contato
            e ajudar sua empresa a ser encontrada por novos clientes.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent-strong">
            Paginas
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-400 transition hover:text-stone-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent-strong">
            Contato
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-brand-accent-strong"
            >
              <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT" />
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-brand-accent-strong"
            >
              <SocialIcon type="instagram" size={19} label="Instagram da Binah IT" />
              {contact.instagramHandle}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-stone-300 transition hover:text-brand-accent-strong"
            >
              <Mail size={18} />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-stone-500">
        Binah IT. Desenvolvimento de presenca digital para empresas.
      </div>
    </footer>
  );
}
