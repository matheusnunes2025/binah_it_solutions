import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { buildLocalizedPrivacyMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocalizedPrivacyMetadata("en");

export default function EnglishPrivacyPage() {
  return <PrivacyPage locale="en" />;
}
