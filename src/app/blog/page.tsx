import React from "react";
import { getAllBlogs } from "../../_content/blogs";
import { BlogCard } from "../../_components/BlogCard";

export default function AllBlogsPage() {
	const blogs = getAllBlogs();

	return (
		<div className="w-full py-16">
			<div className="max-w-7xl mx-auto px-4">

				{/* Page Header */}
				<div className="mb-12">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight">
						All Blogs
					</h1>
					<p className="text-muted-foreground mt-2">
						Explore insights, tutorials, and ideas from our team.
					</p>
				</div>

				{/* Blogs Grid */}
				<div className="flex flex-wrap gap-8">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
						>
							<BlogCard blog={blog} />
						</div>
					))}
				</div>

			</div>
		</div>
	);
}
