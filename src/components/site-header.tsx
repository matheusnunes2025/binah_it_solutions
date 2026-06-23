"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import { navItems, whatsappLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B9A796]/35 bg-[#F8F5ED]/94 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Binah IT Solutions - Home"
        >
          <BrandLogo size="sm" lightBg />
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
                    ? "bg-[#2D2D2D] text-[#F8F5ED] ring-1 ring-inset ring-[#C8A679]/45"
                    : "text-[#2D2D2D] hover:bg-[#EFE7DA] hover:text-[#1E1E1E]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-[8px] bg-[#C8A679] px-4 py-2.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] md:inline-flex"
        >
          <SocialIcon type="whatsapp" size={19} label="WhatsApp da Binah IT Solutions" />
          Falar no WhatsApp
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-[8px] border border-[#B9A796]/45 text-[#1E1E1E] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#B9A796]/30 bg-[#EFE7DA] px-5 py-5 md:hidden">
          <nav className="mx-auto flex max-w-[var(--container)] flex-col gap-2" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-4 py-3 text-base font-medium text-[#1E1E1E] hover:bg-[#F8F5ED]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-4 py-3 text-base font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
            >
              <SocialIcon type="whatsapp" size={20} label="WhatsApp da Binah IT Solutions" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
