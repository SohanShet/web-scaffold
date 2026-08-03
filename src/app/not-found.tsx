import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Page Not Found | Web Scaffold",
	description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
			>
				<ThemeProvider>
					<div className="flex flex-col justify-center items-center mx-auto px-4 py-24 min-h-screen text-center container">
						<p className="font-semibold text-primary text-sm">404</p>

						<h1 className="mt-4 font-bold text-4xl sm:text-5xl tracking-tight">
							Page not found
						</h1>

						<p className="mt-4 max-w-md text-muted-foreground">
							Sorry, we couldn&apos;t find the page you&apos;re looking for.
							It might have been moved or no longer exists.
						</p>

						<div className="flex gap-3 mt-8">
							<Button asChild>
								<Link href="/">Go back home</Link>
							</Button>

							<Button asChild variant="outline">
								<Link href="/blog">Visit the blog</Link>
							</Button>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
