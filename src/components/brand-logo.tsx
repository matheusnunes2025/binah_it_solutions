import Image from "next/image";

type BrandLogoProps = {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  lightBg?: boolean;
};

const fullLogoSizeClasses = {
  sm: "h-16 w-20",
  md: "h-24 w-32",
  lg: "h-32 w-44",
};

const compactLogoSizeClasses = {
  sm: "size-12",
  md: "size-16",
  lg: "size-20",
};

export function BrandLogo({ showText = true, size = "md", lightBg = false }: BrandLogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-[8px] ${
        showText ? fullLogoSizeClasses[size] : compactLogoSizeClasses[size]
      } ${lightBg ? "bg-[#F8F5ED]/70" : "bg-[#EFE7DA]/70"}`}
    >
      <Image
        src="/images/logo.png"
        alt="Logo Binah IT Solutions"
        fill
        sizes={size === "sm" ? "96px" : size === "md" ? "144px" : "192px"}
        className={showText ? "object-contain" : "object-cover"}
        priority={size !== "lg"}
      />
    </span>
  );
}
