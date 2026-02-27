import { Blog } from '../types';

export const masteringTailwindCSS: Blog = {
	id: '2',
	slug: 'mastering-tailwind-css',
	title: 'Mastering Tailwind CSS: A Comprehensive Guide',
	excerpt: 'Learn how to build beautiful, responsive user interfaces quickly and efficiently with Tailwind CSS.',
	content: `
			<p>Tailwind CSS has revolutionized the way we write CSS. By providing a utility-first approach, it allows developers to build custom designs without ever leaving their HTML. In this guide, we'll explore the core concepts of Tailwind and how to use it effectively in your projects.</p>
			
			<h2>Why Tailwind?</h2>
			<p>Traditional CSS frameworks often come with opinionated styles that can be hard to override. Tailwind, on the other hand, gives you the building blocks to create your own unique design system. It's highly customizable, performant, and scales well with large projects.</p>

			<h2>Utility-First Workflow</h2>
			<p>Writing inline styles might seem counterintuitive at first, but it offers several advantages. You don't have to worry about naming classes, you can see the styles right next to your markup, and it's easier to make changes without breaking other parts of your application.</p>
		`,
	author: {
		name: 'Michael Chen',
		avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
		role: 'Frontend Architect'
	},
	date: 'Feb 10, 2024',
	category: 'Development',
	tags: ['CSS', 'Tailwind', 'Frontend', 'Design'],
	imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
	readTime: '8 min read',
	featured: true
};