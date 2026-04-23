"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import { contact, navItems, whatsappLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Binah IT - Home"
        >
          <BrandLogo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[8px] px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-brand-surface-strong text-stone-50 ring-1 ring-inset ring-brand-accent-border"
                    : "text-stone-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-[8px] border border-white/10 text-stone-300 transition hover:border-brand-accent-border hover:bg-brand-accent-soft"
            aria-label="Instagram da Binah IT"
          >
            <SocialIcon type="instagram" size={21} label="Instagram da Binah IT" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[8px] bg-brand-accent px-4 py-2.5 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong"
          >
            <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT" />
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-[8px] border border-white/10 text-stone-100 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-brand-surface px-5 py-5 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-4 py-3 text-base font-medium text-stone-100 hover:bg-white/8"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/10 px-4 py-3 text-base font-semibold text-stone-100 hover:border-brand-accent-border hover:bg-brand-accent-soft"
            >
              <SocialIcon type="instagram" size={20} label="Instagram da Binah IT" />
              Instagram
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-brand-accent px-4 py-3 text-base font-semibold text-[#180d07]"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
