import { Blog, BlogCategory } from './types';

export const blogs: Blog[] = [
	{
		id: '1',
		slug: 'future-of-web-development-2024',
		title: 'The Future of Web Development in 2024: Trends to Watch',
		excerpt: 'Explore the latest trends shaping the web development landscape, from AI-driven coding to the rise of WebAssembly.',
		content: `
			<p>The web development landscape is constantly evolving, and 2024 is shaping up to be a pivotal year. With the rapid advancement of artificial intelligence, the maturation of WebAssembly, and a renewed focus on performance and accessibility, developers have more tools than ever to build incredible experiences.</p>
			
			<h2>AI-Driven Development</h2>
			<p>Artificial Intelligence is no longer just a buzzword; it's becoming an integral part of the development workflow. Tools like GitHub Copilot and ChatGPT are helping developers write code faster, debug more efficiently, and even generate entire components from scratch.</p>

			<h2>The Rise of WebAssembly</h2>
			<p>WebAssembly (Wasm) is unlocking new possibilities for the web. By allowing high-performance languages like C++, Rust, and Go to run in the browser at near-native speeds, Wasm is enabling complex applications like video editors, 3D games, and design tools to run directly in the browser.</p>

			<h2>Server Components and Edge Computing</h2>
			<p>Frameworks like Next.js are pushing the boundaries of what's possible with React Server Components. By moving more logic to the server and leveraging edge computing, developers can deliver faster, more dynamic experiences to users around the globe.</p>
		`,
		author: {
			name: 'Sarah Jenkins',
			avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
			role: 'Senior Developer'
		},
		date: 'Feb 15, 2024',
		category: 'Technology',
		tags: ['Web Development', 'AI', 'Trends', 'JavaScript'],
		imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
		readTime: '5 min read',
		featured: true
	},
	{
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
	},
	{
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
	},
	{
		id: '4',
		slug: 'building-scalable-apis',
		title: 'Building Scalable APIs with Node.js and TypeScript',
		excerpt: 'Best practices for designing and implementing robust, scalable APIs that can handle high traffic loads.',
		content: `
			<p>Building an API that can scale with your application is a critical skill for backend developers. In this article, we'll discuss key strategies for designing and implementing scalable APIs using Node.js and TypeScript.</p>
			
			<h2>REST vs. GraphQL</h2>
			<p>Choosing the right improved architecture is the first step. REST has been the standard for years, but GraphQL offers a more flexible and efficient way to query data. We'll explore the pros and cons of each and when to use them.</p>

			<h2>Caching Strategies</h2>
			<p>Caching is essential for performance. By caching frequently accessed data, you can reduce the load on your database and improve response times. We'll look at different caching strategies, including in-memory caching with Redis and CDN caching.</p>
		`,
		author: {
			name: 'David Kim',
			avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
			role: 'Backend Engineer'
		},
		date: 'Jan 28, 2024',
		category: 'Development',
		tags: ['Node.js', 'API', 'Backend', 'TypeScript'],
		imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop',
		readTime: '10 min read',
		featured: false
	},
	{
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
	},
	{
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
	}
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
