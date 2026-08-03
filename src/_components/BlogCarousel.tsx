"use client";

import * as React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { Blog } from "../_content/types";
import { BlogCard } from "./BlogCard";
import { Section } from "./Section";

interface BlogCarouselProps {
	blogs: Blog[];
	title?: string;
	description?: string;
	className?: string;
	id?: string;
}

export function BlogCarousel({
	blogs,
	title,
	description,
	className,
	id,
}: BlogCarouselProps) {
	if (!blogs?.length) return null;

	return (
		<Section id={id} className={className}>
			<Carousel
				className="w-full"
				opts={{
					align: "start",
					loop: true,
				}}
			>
				<div className="flex items-center justify-between mb-6">
					{(title || description) && (
						<div>
							{title && (
								<h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
									{title}
								</h2>
							)}
							{description && (
								<p className="text-muted-foreground mt-1 max-w-2xl">
									{description}
								</p>
							)}
						</div>
					)}
					<div className="flex items-center gap-2 ml-auto">
						<CarouselPrevious className="static translate-y-0" />
						<CarouselNext className="static translate-y-0" />
					</div>
				</div>

				<CarouselContent className="-ml-4">
					{blogs.map((blog) => (
						<CarouselItem
							key={blog.id}
							className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
							<div className="h-full py-1">
								<BlogCard blog={blog} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</Section>
	);
}
