'use client';
import { use } from 'react';
import { BlogCarousel } from "@/_components/BlogCarousel";
import { Blog } from "@/_content/types";

interface BlogListProps {
	blogsPromise: Promise<Blog[]>;
}

export default function BlogList({ blogsPromise }: BlogListProps) {
	const blogs = use(blogsPromise);

	return (
		<BlogCarousel
			id="blogs"
			blogs={blogs}
			title="Latest Blogs"
			description="Check out our latest blog posts."
		/>
	);
}
