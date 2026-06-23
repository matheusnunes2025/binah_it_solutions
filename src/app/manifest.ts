import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F8F5ED",
    theme_color: "#1E1E1E",
    lang: "pt-BR",
    categories: ["business", "marketing", "technology"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1254x1254",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
