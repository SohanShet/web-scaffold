import Image from "next/image";
import { CTAButton } from "@/_components/custom-buttons/CTAButton";
import { NonCTAButton } from "@/_components/custom-buttons/NonCTAButton";
import { BlogCarousel } from "@/_components/BlogCarousel";
import { getAllBlogs } from "@/_content/blogs";
import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebsiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
	title: "Web Scaffold - Modern Next.js Boilerplate",
	description: "The ultimate starting point for your next web project with premium SEO and performance.",
};

import { Suspense } from "react";
import Loading from "@/_components/Loading";
import BlogListClient from "@/_components/BlogListClient";

export default function Home() {
	// Simulate an async operation/data fetch
	const blogsPromise = (async () => {
		// Just to demonstrate the loading state, we could add a delay here if needed
		// await new Promise(resolve => setTimeout(resolve, 1000));
		return getAllBlogs().slice(0, 5);
	})();

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 font-sans">
			<JsonLd data={getWebsiteSchema()} />

			<Suspense fallback={<Loading />}>
				<BlogListClient blogsPromise={blogsPromise} />
			</Suspense>
		</div>
	);
}
