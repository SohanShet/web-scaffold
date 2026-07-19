import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { getBlogBySlug, getBlogSlugs, getRelatedBlogs } from "@/_content/blogs";
import { ScrollToTop } from "@/_components/ScrollToTop";
import { BlogCarousel } from "@/_components/BlogCarousel";
import { ImageOff, User } from "lucide-react";


import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { mdxComponents } from "@/components/seo/MdxContent";
import { Pre } from '@/_components/blogComponents/Pre' // Adjust path to your Pre component

// 1. Define your custom components mapping object
const mdxComponentsCustom = {
	pre: Pre,
}

interface BlogPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) return {};

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";
	const ogImage = `${baseUrl}/blog/${blog.slug}/opengraph-image`;
	const publishedAt = blog.publishedAt ?? "";

	return {
		title: blog.title,
		description: blog.excerpt,
		openGraph: {
			title: blog.title,
			description: blog.excerpt,
			images: [ogImage],
			type: "article",
			publishedTime: new Date(publishedAt).toISOString(),
			authors: [blog.author.name],
			tags: blog.tags,
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: blog.excerpt,
			images: [ogImage],
		},
		alternates: {
			canonical: `${baseUrl}/blog/${blog.slug}`,
		},
	};
}

export default async function BlogPage({ params }: BlogPageProps) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	if (!blog) return notFound();

	const relatedBlogs = getRelatedBlogs(blog.slug, blog.category);
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";
	const publishedAt = blog.publishedAt ?? "";
	const updatedAt = blog.updatedAt ?? blog.publishedAt ?? "";

	const blogSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: blog.title,
		description: blog.excerpt,
		image: blog.imageUrl || `${baseUrl}/blog/${blog.slug}/opengraph-image`,
		datePublished: new Date(publishedAt).toISOString(),
		dateModified: new Date(updatedAt).toISOString(),
		url: `${baseUrl}/blog/${blog.slug}`,
		author: {
			"@type": "Person",
			name: blog.author.name,
		},
	};

	return (
		<div className="py-12 w-full">
			<JsonLd data={blogSchema} />
			<div className="mx-auto px-4 max-w-4xl">

				{/* Breadcrumb */}
				<div className="mb-8">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="/">Home</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="/blog">Blog</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{blog.title}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				{/* Title */}
				<h1 className="mb-6 font-bold text-3xl md:text-4xl leading-tight">
					{blog.title}
				</h1>

				{/* Meta Info */}
				<div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground text-sm">
					<span>{blog.date}</span>
					<span>{blog.readTime}</span>
					<span className="font-medium text-foreground">
						{blog.author.name}
					</span>
				</div>

				{/* Featured Image */}
				<div className="relative flex justify-center items-center bg-muted mb-10 rounded-xl w-full h-[350px] md:h-[450px] overflow-hidden">
					{/* <Image
						src={blog.imageUrl}
						alt={blog.title}
						fill
						className="object-cover"
						sizes="100vw"
					/> */}
					<ImageOff className="w-12 h-12 text-muted-foreground/40" strokeWidth={1.5} />
				</div>

				{/* Blog Content */}
				<article className="dark:prose-invert mb-12 max-w-none prose mdx-content">
					<MDXRemote
						source={blog.content}
						components={mdxComponentsCustom}
						options={{
							mdxOptions: {
								remarkPlugins: [remarkGfm],
							},
						}}
					/>
				</article>

				{/* Tags */}
				<div className="flex flex-wrap gap-3 mb-12">
					{blog.tags.map((tag) => (
						<span
							key={tag}
							className="bg-muted px-3 py-1 border border-border rounded-full text-xs"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Author Box */}
				<div className="flex items-center gap-4 mb-16 p-6 border border-border rounded-xl">
					<div className="relative flex justify-center items-center bg-muted rounded-full w-14 h-14 overflow-hidden">
						{/* <Image
							src={blog.author.avatar}
							alt={blog.author.name}
							fill
							className="object-cover"
						/> */}
						<User className="w-6 h-6 text-muted-foreground/50" strokeWidth={1.5} />
					</div>
					<div>
						<p className="font-semibold">{blog.author.name}</p>
						<p className="text-muted-foreground text-sm">
							{blog.author.role}
						</p>
					</div>
				</div>
			</div>

			<BlogCarousel
				blogs={relatedBlogs}
				title="Related Blogs"
				description="Check out our latest blog posts."
			/>

			{/* Scroll To Top */}
			<ScrollToTop />
		</div>
	);
}
