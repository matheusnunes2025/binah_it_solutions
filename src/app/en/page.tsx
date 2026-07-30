import type { Metadata } from "next";
import { EnterprisePage } from "@/components/enterprise-page";
import { buildLocalizedHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocalizedHomeMetadata("en");

export default function EnglishHomePage() {
  return <EnterprisePage locale="en" />;
}
