"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { CheckCircle2, ExternalLink, X, ZoomIn } from "lucide-react";

type ImageOverlayCardProps = {
  image: string;
  title: string;
  description: string;
  eyebrow?: string;
  details?: readonly string[];
  href?: string;
  ctaLabel?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function ImageOverlayCard({
  image,
  title,
  description,
  eyebrow = "Detalhes",
  details = [],
  href,
  ctaLabel = "Abrir link",
  alt,
  sizes = "100vw",
  priority = false,
  className = "aspect-[4/3]",
  imageClassName = "object-cover",
}: ImageOverlayCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`${className} group relative block w-full overflow-hidden text-left`}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <Image
          src={image}
          alt={alt || title}
          fill
          sizes={sizes}
          priority={priority}
          className={`${imageClassName} transition duration-700 group-hover:scale-105`}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(0,0,0,0.68)_100%)] opacity-75 transition group-hover:opacity-95" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-[8px] border border-brand-accent-border bg-brand-surface/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
          <ZoomIn size={15} />
          Ver detalhes
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-[8px] border border-brand-accent-border bg-brand-surface/90 text-white transition hover:bg-brand-surface-strong"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar detalhes"
          >
            <X size={22} />
          </button>

          <div className="grid max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[8px] border border-white/10 bg-brand-surface shadow-2xl shadow-black/60 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[280px] lg:min-h-[620px]">
              <Image
                src={image}
                alt={alt || title}
                fill
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-contain bg-brand-bg"
              />
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent-strong">
                {eyebrow}
              </p>
              <h2 id={titleId} className="mt-4 text-3xl font-semibold text-stone-50">
                {title}
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300">{description}</p>

              {details.length ? (
                <div className="mt-7 grid gap-3">
                  {details.map((detail) => (
                    <div key={detail} className="flex gap-3 text-sm leading-6 text-stone-300">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-brand-accent px-4 py-3 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong"
                >
                  {ctaLabel}
                  <ExternalLink size={17} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
