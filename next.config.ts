import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/pt-br",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/pt-br/privacidade",
        destination: "/privacidade",
        statusCode: 301,
      },
      {
        source: "/politica-de-privacidade",
        destination: "/privacidade",
        statusCode: 301,
      },
      {
        source: "/privacy",
        destination: "/en/privacy",
        statusCode: 301,
      },
      {
        source: "/projetos",
        destination: "/portfolio",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
