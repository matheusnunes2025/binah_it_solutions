import Image from "next/image";

type SocialIconProps = {
  type: "whatsapp" | "instagram";
  size?: number;
  label?: string;
};

export function SocialIcon({ type, size = 20, label = "" }: SocialIconProps) {
  const src =
    type === "whatsapp" ? "/images/icon-whatsapp.svg" : "/images/icon-instagram.png";
  const alt = label || (type === "whatsapp" ? "WhatsApp" : "Instagram");

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      unoptimized={type === "whatsapp"}
      className="shrink-0"
    />
  );
}
