import type { Metadata } from "next";

import { privacyPolicy } from "@/_content/legal/privacy-policy";
import { LegalPageContent } from "@/_components/LegalPageContent";

export const metadata: Metadata = {
	title: `${privacyPolicy.title} | Web Scaffold`,
	description: "Learn how Web Scaffold collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
	return <LegalPageContent content={privacyPolicy} />;
}
