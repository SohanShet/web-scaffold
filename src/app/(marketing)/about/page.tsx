import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: "About Us | Web Scaffold",
	description: "Learn more about Web Scaffold and our mission to provide the best Next.js boilerplate.",
}

function AboutPage() {
	return (
		<main className="container mx-auto px-4 py-20">
			<h1 className="text-4xl font-bold mb-8">About Us</h1>
			<div className="prose prose-neutral dark:prose-invert max-w-none">
				<p>Welcome to Web Scaffold, your premium starting point for modern web applications.</p>
				<p>Built with Next.js, React, and Tailwind CSS, this scaffold is designed to help you launch faster with better SEO and performance.</p>
			</div>
		</main>
	)
}

export default AboutPage