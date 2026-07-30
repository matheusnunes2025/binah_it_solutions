import type { Metadata } from "next";
import { EnterprisePage } from "@/components/enterprise-page";
import { buildLocalizedHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocalizedHomeMetadata("es");

export default function SpanishHomePage() {
  return <EnterprisePage locale="es" />;
}
