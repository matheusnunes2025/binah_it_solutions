"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { CheckCircle2, ExternalLink, Maximize2, X } from "lucide-react";

type ImageOverlayCardProps = {
  image: string;
  title: string;
  description: string;
  eyebrow?: string;
  details?: readonly string[];
  href?: string;
  ctaLabel?: string;
  badgeLabel?: string;
  alt?: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function ImageOverlayCard({
  image,
  title,
  description,
  eyebrow = "Projeto publicado",
  details = [],
  href,
  ctaLabel = "Ver projeto",
  badgeLabel = "Ampliar projeto",
  alt,
  sizes = "100vw",
  className = "aspect-[4/3]",
  imageClassName = "object-contain",
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
        className={`${className} group relative block w-full overflow-hidden rounded-[24px] border border-[#B9A796]/45 bg-[#EFE7DA] text-left shadow-[var(--shadow-card)]`}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <Image
          src={image}
          alt={alt || title}
          fill
          sizes={sizes}
          className={`${imageClassName} bg-[#EFE7DA] transition duration-500 group-hover:scale-[1.02]`}
        />
        <span className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(248,245,237,0),rgba(248,245,237,0.92))]" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-[14px] border border-[#B9A796]/55 bg-[#F8F5ED]/90 px-3 py-2 text-xs font-semibold text-[#1E1E1E] shadow-sm backdrop-blur">
          <Maximize2 size={15} />
          {badgeLabel}
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#2D2D2D]/45 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="mx-auto flex min-h-full w-full max-w-6xl items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid max-h-[calc(100dvh-1.5rem)] w-full overflow-hidden rounded-[28px] border border-[#B9A796]/50 bg-[#F8F5ED] shadow-[0_28px_90px_rgba(30,30,30,0.18)] lg:max-h-[88dvh] lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-[16/10] min-h-[240px] bg-[#EFE7DA] lg:aspect-auto lg:min-h-[620px]">
                <Image
                  src={image}
                  alt={alt || title}
                  fill
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className="object-contain bg-[#EFE7DA]"
                />
              </div>

              <div className="relative min-h-0 overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(200,166,121,0.16),transparent_34%),linear-gradient(180deg,#F8F5ED_0%,#EFE7DA_100%)] p-5 text-[#1E1E1E] sm:p-8">
                <button
                  type="button"
                  className="absolute right-4 top-4 grid size-11 place-items-center rounded-[14px] border border-[#B9A796]/55 bg-[#F8F5ED]/88 text-[#1E1E1E] transition hover:border-[#C8A679] hover:bg-white"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar projeto"
                >
                  <X size={22} />
                </button>

                <p className="pr-14 text-sm font-semibold uppercase text-[#5B331A]">
                  {eyebrow}
                </p>
                <h2 id={titleId} className="mt-4 pr-14 font-serif text-3xl font-semibold">
                  {title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#2D2D2D] sm:text-base sm:leading-8">
                  {description}
                </p>

                {details.length ? (
                  <div className="mt-7 grid gap-3">
                    {details.map((detail) => (
                      <div key={detail} className="flex gap-3 text-sm leading-6 text-[#2D2D2D]">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[#5B331A]" size={18} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#C8A679] px-4 py-3 text-sm font-semibold text-[#1E1E1E] transition hover:bg-[#5B331A] hover:text-[#F8F5ED]"
                    >
                      {ctaLabel}
                      <ExternalLink size={17} />
                    </a>
                  ) : null}

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-[14px] border border-[rgba(30,30,30,0.24)] px-4 py-3 text-sm font-semibold text-[#1E1E1E] transition hover:border-[#C8A679] hover:bg-[#F8F5ED]"
                    onClick={() => setIsOpen(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
