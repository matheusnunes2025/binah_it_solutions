import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { buildLocalizedPrivacyMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocalizedPrivacyMetadata("es");

export default function SpanishPrivacyPage() {
  return <PrivacyPage locale="es" />;
}
