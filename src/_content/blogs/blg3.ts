import { Blog } from '../types';

export const designPrinciplesForDevelopers: Blog = {
	id: '3',
	slug: 'design-principles-for-developers',
	title: 'Essential Design Principles Every Developer Should Know',
	excerpt: 'Bridge the gap between design and development with these fundamental principles of good UI/UX design.',
	content: `
			<p>As a developer, having a basic understanding of design principles can significantly improve the quality of your work. It helps you collaborate better with designers, make informed decisions when implementing UIs, and ultimately create better experiences for your users.</p>
			
			<h2>Hierarchy and Layout</h2>
			<p>Visual hierarchy is about organizing elements in a way that guides the user's eye through the content. By using size, color, and spacing effectively, you can emphasize important information and create a clear structure for your page.</p>

			<h2>Typography Matters</h2>
			<p>Good typography is essential for readability and aesthetics. Choosing the right fonts, line heights, and spacing can make a huge difference in how your content is perceived. Aim for a clean, legible typeface and maintain consistent spacing throughout your design.</p>
		`,
	author: {
		name: 'Emily Rodriguez',
		avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
		role: 'UI/UX Designer'
	},
	date: 'Feb 5, 2024',
	category: 'Development',
	tags: ['UI/UX', 'Design', 'Typography', 'Layout'],
	imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
	readTime: '6 min read',
	featured: true
};