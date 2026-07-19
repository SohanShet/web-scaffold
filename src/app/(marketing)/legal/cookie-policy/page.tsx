import type { Metadata } from "next";

import { cookiePolicy } from "@/_content/legal/cookie-policy";
import { LegalPageContent } from "@/_components/LegalPageContent";

export const metadata: Metadata = {
	title: `${cookiePolicy.title} | Web Scaffold`,
	description: "Learn how Web Scaffold uses cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
	return <LegalPageContent content={cookiePolicy} />;
}
