import { ContactSection } from "@/_components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Web Scaffold",
	description: "Get in touch with us to start your next project.",
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-background">
			<ContactSection />
		</main>
	);
}
