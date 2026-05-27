import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

import { Blog, BlogCategory } from "../types";

const BLOGS_DIRECTORY = path.join(process.cwd(), "src", "_content", "blogs");

type BlogFrontmatter = {
	title?: string;
	excerpt?: string;
	summary?: string;
	publishedAt?: string;
	updatedAt?: string;
	author?:
		| string
		| {
				name?: string;
				avatar?: string;
				role?: string;
		  };
	category?: BlogCategory;
	tags?: string[];
	image?: string;
	imageUrl?: string;
	readTime?: string;
	featured?: boolean;
};

function getBlogFiles() {
	return fs
		.readdirSync(BLOGS_DIRECTORY)
		.filter((file) => file.endsWith(".mdx"));
}

function formatPublishedDate(date: string) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(new Date(date));
}

function calculateReadTime(content: string) {
	const words = content.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(words / 200));
	return `${minutes} min read`;
}

function parseAuthor(author: BlogFrontmatter["author"]) {
	if (typeof author === "string") {
		return {
			name: author,
			avatar: "",
			role: "Contributor",
		};
	}

	return {
		name: author?.name ?? "Unknown Author",
		avatar: author?.avatar ?? "",
		role: author?.role ?? "Contributor",
	};
}

function parseBlogFile(fileName: string): Blog {
	const slug = fileName.replace(/\.mdx$/, "");
	const filePath = path.join(BLOGS_DIRECTORY, fileName);
	const source = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(source);
	const frontmatter = data as BlogFrontmatter;
	const publishedAt = frontmatter.publishedAt ?? frontmatter.updatedAt ?? new Date().toISOString();

	return {
		id: slug,
		slug,
		title: frontmatter.title ?? slug,
		excerpt: frontmatter.excerpt ?? frontmatter.summary ?? "",
		content,
		author: parseAuthor(frontmatter.author),
		publishedAt,
		updatedAt: frontmatter.updatedAt,
		date: formatPublishedDate(publishedAt),
		category: frontmatter.category ?? "Development",
		tags: frontmatter.tags ?? [],
		imageUrl: frontmatter.image ?? frontmatter.imageUrl ?? "",
		readTime: frontmatter.readTime ?? calculateReadTime(content),
		featured: frontmatter.featured ?? false,
	};
}

export const getAllBlogs = cache((): Blog[] => {
	return getBlogFiles()
		.map(parseBlogFile)
		.sort(
			(a, b) =>
				new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime()
		);
});

export function getFeaturedBlogs(): Blog[] {
	return getAllBlogs().filter((blog) => blog.featured);
}

export function getBlogBySlug(slug: string): Blog | undefined {
	return getAllBlogs().find((blog) => blog.slug === slug);
}

export function getBlogsByCategory(category: BlogCategory): Blog[] {
	return getAllBlogs().filter((blog) => blog.category === category);
}

export function getRelatedBlogs(currentSlug: string, category: BlogCategory, limit: number = 3): Blog[] {
	return getAllBlogs()
		.filter((blog) => blog.category === category && blog.slug !== currentSlug)
		.slice(0, limit);
}

export function getBlogSlugs(): string[] {
	return getAllBlogs().map((blog) => blog.slug);
}
