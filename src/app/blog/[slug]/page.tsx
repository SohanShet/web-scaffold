import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { getAllBlogs, getBlogBySlug, getRelatedBlogs } from "../../../_content/blogs";
import { ScrollToTop } from "../../../_components/ScrollToTop";
import { BlogCard } from "../../../_components/BlogCard";
import { BlogCarousel } from "@/_components/BlogCarousel";


interface BlogPageProps {
	params: {
		slug: string;
	};
}

export default async function BlogPage({ params }: BlogPageProps) {
	const { slug } = await params;
	const blog = await getBlogBySlug(slug);

	const gt5 = getAllBlogs().slice(0, 5);

	if (!blog) return notFound();

	const relatedBlogs = await getRelatedBlogs(blog.slug, blog.category);

	return (
		<div className="w-full py-12">
			<div className="max-w-4xl mx-auto px-4">

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
									<Link href="/blogs">Blogs</Link>
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
				<h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
					{blog.title}
				</h1>

				{/* Meta Info */}
				<div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
					<span>{blog.date}</span>
					<span>{blog.readTime}</span>
					<span className="font-medium text-foreground">
						{blog.author.name}
					</span>
				</div>

				{/* Featured Image */}
				<div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-10">
					{/* <Image
						src={blog.imageUrl}
						alt={blog.title}
						fill
						className="object-cover"
						sizes="100vw"
					/> */}
				</div>

				{/* Blog Content */}
				<article
					className="prose prose-neutral dark:prose-invert max-w-none mb-12"
					dangerouslySetInnerHTML={{ __html: blog.content }}
				/>

				{/* Tags */}
				<div className="flex flex-wrap gap-3 mb-12">
					{blog.tags.map((tag) => (
						<span
							key={tag}
							className="text-xs px-3 py-1 rounded-full bg-muted border border-border"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Author Box */}
				<div className="flex items-center gap-4 p-6 border border-border rounded-xl mb-16">
					<div className="relative w-14 h-14 rounded-full overflow-hidden">
						{/* <Image
							src={blog.author.avatar}
							alt={blog.author.name}
							fill
							className="object-cover"
						/> */}
					</div>
					<div>
						<p className="font-semibold">{blog.author.name}</p>
						<p className="text-sm text-muted-foreground">
							{blog.author.role}
						</p>
					</div>
				</div>



				<BlogCarousel
					blogs={relatedBlogs}
					title="Related Blogs"
					description="Check out our latest blog posts."
				/>
			</div>

			{/* Scroll To Top */}
			<ScrollToTop />
		</div>
	);
}
