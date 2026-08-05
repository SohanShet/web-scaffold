import { getAllBlogs } from "@/_content/blogs";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebsiteSchema, getFaqSchema } from "@/lib/structured-data";
import { FaqSection } from "@/_components/FaqSection";
import { faqContent } from "@/_content/faq";
import { ReviewSection } from "@/_components/ReviewSection";
import { reviewContent } from "@/_content/reviews";
import { ContactSection } from "@/_components/ContactSection";

export const metadata: Metadata = {
	title: "Web Scaffold - Modern Next.js Boilerplate",
	description: "The ultimate starting point for your next web project with premium SEO and performance.",
};

import { Suspense } from "react";
import Loading from "@/_components/Loading";
import BlogListClient from "@/_components/BlogListClient";
// TEMPLATE SHOWCASE — see src/_components/ScaffoldShowcase.tsx for removal steps
import { ScaffoldShowcase } from "@/_components/ScaffoldShowcase";
// TEMPLATE SHOWCASE — see src/_components/ButtonShowcase.tsx for removal steps
import { ButtonShowcase } from "@/_components/ButtonShowcase";
// TEMPLATE SHOWCASE — see src/_components/FormShowcase.tsx for removal steps
import { FormShowcase } from "@/_components/FormShowcase";

export default function Home() {
	// Simulate an async operation/data fetch
	const blogsPromise = (async () => {
		// Just to demonstrate the loading state, we could add a delay here if needed
		// await new Promise(resolve => setTimeout(resolve, 1000));
		return getAllBlogs().slice(0, 5);
	})();

	return (
		<div className="flex min-h-screen flex-col items-center bg-muted/30 font-sans">
			<JsonLd data={getWebsiteSchema()} />
			<JsonLd data={getFaqSchema(faqContent.items)} />

			{/* TEMPLATE SHOWCASE START — delete this block to start from a blank canvas */}
			<ScaffoldShowcase />
			<ButtonShowcase />
			<FormShowcase />
			{/* TEMPLATE SHOWCASE END */}

			<div className="flex w-full flex-1 flex-col items-center justify-center">
				<Suspense fallback={<Loading />}>
					<BlogListClient blogsPromise={blogsPromise} />
				</Suspense>
			</div>

			<ReviewSection content={reviewContent} />
			<ContactSection />
			<FaqSection content={faqContent} />
		</div>
	);
}
