import { Blog } from '../types';

export const remoteWorkCulture: Blog = {
	id: '5',
	slug: 'remote-work-culture',
	title: 'Building a Thriving Remote Work Culture',
	excerpt: 'Tips and strategies for fostering collaboration, communication, and well-being in a distributed team environment.',
	content: `
			<p>Remote work is here to stay. But building a strong company culture without a physical office can be challenging. In this post, we'll share some tips and strategies for creating a thriving remote work environment.</p>
			
			<h2>Communication is Key</h2>
			<p>In a remote setting, over-communication is better than under-communication. Make sure everyone is on the same page by using tools like Slack, Zoom, and Notion to stay connected and share information effectively.</p>

			<h2>Trust and Autonomy</h2>
			<p>Micro-management doesn't work in a remote environment. Trust your team to do their best work and give them the autonomy to manage their own schedules. Focus on outcomes rather than hours worked.</p>
		`,
	author: {
		name: 'Alex Johnson',
		avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
		role: 'Product Manager'
	},
	date: 'Jan 20, 2024',
	category: 'Business',
	tags: ['Remote Work', 'Culture', 'Management', 'Productivity'],
	imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop',
	readTime: '7 min read',
	featured: false
};