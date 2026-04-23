import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d1219",
    theme_color: "#ff6b1a",
    lang: "pt-BR",
    categories: ["business", "marketing", "technology"],
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
      },
    ],
  };
}
