import { MetadataRoute } from "next";
import { getAllBlogs } from "@/_content/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";
	const blogs = getAllBlogs();

	const blogEntries = blogs.map((blog) => ({
		url: `${baseUrl}/blog/${blog.slug}`,
		lastModified: new Date(blog.updatedAt ?? blog.publishedAt ?? Date.now()),
	}));

	const routes = ["", "/blog", "/about", "/contact"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
	}));

	return [...routes, ...blogEntries];
}
