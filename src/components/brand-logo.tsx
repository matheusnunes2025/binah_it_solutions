import Image from "next/image";

type BrandLogoProps = {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "size-11",
  md: "size-14",
  lg: "size-20",
};

export function BrandLogo({ showText = true, size = "md" }: BrandLogoProps) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`${sizeClasses[size]} relative shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-brand-surface shadow-[0_0_32px_rgba(255,107,26,0.14)]`}
      >
        <Image
          src="/images/logo-binah-ember.png"
          alt="Logo Binah IT Solutions"
          fill
          sizes="80px"
          className="object-contain p-[2px]"
          priority={size !== "lg"}
        />
      </span>
      {showText ? (
        <span className="leading-tight">
          <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-stone-50">
            Binah IT
          </span>
          <span className="block text-xs text-brand-accent-strong">IT Solutions</span>
        </span>
      ) : null}
    </span>
  );
}
