import { Blog, BlogCategory } from '../types';
import { futureOfWebDevelopment2024 } from './future-of-web-development-2024';
import { masteringTailwindCSS } from './blg2';
import { designPrinciplesForDevelopers } from './blg3';
import { buildingScalableAPIs } from './blg4';
import { remoteWorkCulture } from './blg5';
import { mindfulProductivity } from './blg6';

export const blogs: Blog[] = [
	futureOfWebDevelopment2024,
	masteringTailwindCSS,
	designPrinciplesForDevelopers,
	buildingScalableAPIs,
	remoteWorkCulture,
	mindfulProductivity
];

export function getAllBlogs(): Blog[] {
	return blogs;
}

export function getFeaturedBlogs(): Blog[] {
	return blogs.filter(blog => blog.featured);
}

export function getBlogBySlug(slug: string): Blog | undefined {
	return blogs.find(blog => blog.slug === slug);
}

export function getBlogsByCategory(category: BlogCategory): Blog[] {
	return blogs.filter(blog => blog.category === category);
}

export function getRelatedBlogs(currentSlug: string, category: BlogCategory, limit: number = 3): Blog[] {
	return blogs
		.filter(blog => blog.category === category && blog.slug !== currentSlug)
		.slice(0, limit);
}
