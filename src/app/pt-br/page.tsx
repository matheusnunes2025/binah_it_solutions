import type { Metadata } from "next";
import { EnterprisePage } from "@/components/enterprise-page";
import { buildLocalizedHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildLocalizedHomeMetadata("pt");

export default function PortugueseHomePage() {
  return <EnterprisePage locale="pt" />;
}
