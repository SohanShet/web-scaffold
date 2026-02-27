import { Blog } from '../types';

export const mindfulProductivity: Blog = {
	id: '6',
	slug: 'mindful-productivity',
	title: 'Mindful Productivity: Doing More with Less Stress',
	excerpt: 'Discover how mindfulness techniques can help you stay focused, reduce burnout, and achieve better results in your work.',
	content: `
			<p>In today's fast-paced world, it's easy to get caught up in the hustle and burnout. Mindful productivity is about finding a balance between working hard and taking care of yourself. It's about being present in the moment and focusing on what truly matters.</p>
			
			<h2>The Power of Focus</h2>
			<p>Multitasking is a myth. To be truly productive, you need to focus on one thing at a time. Techniques like the Pomodoro logic can help you break your work into manageable chunks and stay focused for longer periods.</p>

			<h2>Taking Breaks</h2>
			<p>It might sound counterintuitive, but taking regular breaks can actually make you more productive. Stepping away from your screen gives your brain a chance to rest and recharge, allowing you to return to your work with renewed energy and focus.</p>
		`,
	author: {
		name: 'Lisa Wong',
		avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
		role: 'Wellness Coach'
	},
	date: 'Jan 15, 2024',
	category: 'Lifestyle',
	tags: ['Productivity', 'Mindfulness', 'Wellness', 'Focus'],
	imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop',
	readTime: '5 min read',
	featured: false
};