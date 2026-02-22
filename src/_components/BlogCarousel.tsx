"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { Blog } from "../_content/types";
import { BlogCard } from "./BlogCard";

interface BlogCarouselProps {
	blogs: Blog[];
	title?: string;
	description?: string;
	className?: string;
}

export function BlogCarousel({
	blogs,
	title,
	description,
	className,
}: BlogCarouselProps) {
	if (!blogs?.length) return null;

	return (
		<section className={`w-full py-12 ${className ?? ""}`}>
			<div className="max-w-7xl mx-auto px-4">

				{(title || description) && (
					<div className="mb-6">
						{title && (
							<h2 className="text-2xl md:text-3xl font-semibold">
								{title}
							</h2>
						)}
						{description && (
							<p className="text-muted-foreground mt-1">
								{description}
							</p>
						)}
					</div>
				)}

				<Carousel className="w-full">
					<CarouselContent>
						{blogs.map((blog) => (
							<CarouselItem
								key={blog.id}
								className="basis-full sm:basis-1/2 lg:basis-1/3"
							>
								<BlogCard blog={blog} />
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}