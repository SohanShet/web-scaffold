import { ContactSection } from "@/_components/ContactSection";
import { FaqSection } from "@/_components/FaqSection";
import { faqContent } from "@/_content/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaqSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Web Scaffold",
	description: "Get in touch with us to start your next project.",
	alternates: {
		canonical: "/contact",
	},
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-background">
			<JsonLd data={getFaqSchema(faqContent.items)} />
			<ContactSection />
			<FaqSection content={faqContent} />
		</main>
	);
}
