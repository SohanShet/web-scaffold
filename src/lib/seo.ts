import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";

export const defaultSEO: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Web Scaffold - Modern Next.js Boilerplate",
		template: "%s | Web Scaffold",
	},
	description: "A premium Next.js scaffold with SEO, performance, and modern design out of the box.",
	keywords: ["Next.js", "React", "Tailwind CSS", "SEO", "Web Development", "Scaffold", "Boilerplate"],
	authors: [{ name: "Sohan Shet" }],
	creator: "Sohan Shet",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		siteName: "Web Scaffold",
		title: "Web Scaffold - Modern Next.js Boilerplate",
		description: "A premium Next.js scaffold with SEO, performance, and modern design out of the box.",
		images: [
			{
				url: `${baseUrl}/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Web Scaffold",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Web Scaffold - Modern Next.js Boilerplate",
		description: "A premium Next.js scaffold with SEO, performance, and modern design out of the box.",
		images: [`${baseUrl}/og-image.png`],
		creator: "@sohanshet",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	alternates: {
		canonical: baseUrl,
	},
};
