import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { navbarContent } from "../_content/navbar";
import { footerContent } from "../_content/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

import { defaultSEO } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/lib/structured-data";

export const metadata = defaultSEO;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
			>
				<JsonLd data={getOrganizationSchema()} />
				<Navbar content={navbarContent} />
				<main className="flex-1">
					{children}
				</main>
				<Footer content={footerContent} />
			</body>
		</html>
	);
}
