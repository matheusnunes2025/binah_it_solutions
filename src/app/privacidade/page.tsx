import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { buildLocalizedPrivacyMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocalizedPrivacyMetadata("pt");

export default function PortuguesePrivacyPage() {
  return <PrivacyPage locale="pt" />;
}
