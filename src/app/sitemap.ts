import { MetadataRoute } from "next";
import { blogs } from "@/_content/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";

	const blogEntries = blogs.map((blog) => ({
		url: `${baseUrl}/blog/${blog.slug}`,
		lastModified: new Date(blog.date),
	}));

	const routes = ["", "/blog", "/about", "/contact"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
	}));

	return [...routes, ...blogEntries];
}
