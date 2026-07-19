import type { Metadata } from "next";

import { termsOfService } from "@/_content/legal/terms-of-service";
import { LegalPageContent } from "@/_components/LegalPageContent";

export const metadata: Metadata = {
	title: `${termsOfService.title} | Web Scaffold`,
	description: "Read the terms and conditions that govern your use of Web Scaffold.",
};

export default function TermsOfServicePage() {
	return <LegalPageContent content={termsOfService} />;
}
