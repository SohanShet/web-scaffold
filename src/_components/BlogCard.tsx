'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '../_content/types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
	blog: Blog;
	featured?: boolean;
}

export function BlogCard({ blog, featured = false }: BlogCardProps) {
	return (
		<Link
			href={`/blog/${blog.slug}`}
			className={`group flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${featured ? 'md:flex-row md:col-span-2 md:h-[400px]' : ''}`}
		>
			<div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-64 md:h-full' : 'h-52 w-full'}`}>
				{/* <Image
					src={blog.imageUrl}
					alt={blog.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
				/> */}
				<div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground border border-border/50 shadow-sm">
					{blog.category}
				</div>
			</div>

			<div className={`flex flex-col flex-1 p-6 ${featured ? 'justify-center md:p-10' : ''}`}>
				<div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
					<div className="flex items-center gap-1">
						<Calendar className="w-3.5 h-3.5" />
						<span>{blog.date}</span>
					</div>
					<div className="flex items-center gap-1">
						<Clock className="w-3.5 h-3.5" />
						<span>{blog.readTime}</span>
					</div>
				</div>

				<h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
					{blog.title}
				</h3>

				<p className={`text-muted-foreground line-clamp-3 mb-6 ${featured ? 'text-lg' : 'text-sm'}`}>
					{blog.excerpt}
				</p>

				<div className="mt-auto flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
							{/* <Image
								src={blog.author.avatar}
								alt={blog.author.name}
								fill
								className="object-cover"
							/> */}
						</div>
						<span className="text-sm font-medium text-foreground">{blog.author.name}</span>
					</div>

					<div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
						Read More <ArrowRight className="w-4 h-4 ml-1" />
					</div>
				</div>
			</div>
		</Link>
	);
}
