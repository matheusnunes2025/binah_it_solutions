import Image from "next/image";
import type { ReactNode } from "react";

type VisualFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  framed?: boolean;
  children?: ReactNode;
};

export function VisualFrame({
  src,
  alt,
  className = "aspect-[16/10]",
  imageClassName = "object-contain",
  sizes = "100vw",
  priority = false,
  framed = true,
  children,
}: VisualFrameProps) {
  const frameClass = framed
    ? "image-contain-frame"
    : "relative overflow-hidden bg-[#EFE7DA]";

  return (
    <figure className={`${frameClass} relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${imageClassName} bg-[#EFE7DA]`}
      />
      {children}
    </figure>
  );
}
