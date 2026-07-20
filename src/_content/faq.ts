import { FaqContent } from './types';

export const faqContent: FaqContent = {
	title: 'Frequently Asked Questions',
	subtitle: "Can't find the answer you're looking for? Reach out to our team.",
	items: [
		{
			question: 'What is Web Scaffold?',
			answer:
				'Web Scaffold is a reusable Next.js starter that pre-bakes the foundations most projects rebuild from scratch — content architecture, blog/MDX infrastructure, SEO, shared UI, and loading states — so you can skip setup and start on the actual product.',
		},
		{
			question: 'What tech stack does it use?',
			answer:
				'Next.js with the App Router, TypeScript, Tailwind CSS v4, and shadcn/ui components on top of Radix primitives. Blog content is authored in MDX and rendered via next-mdx-remote.',
		},
		{
			question: 'How do I add a new blog post?',
			answer:
				'Drop a new .mdx file into src/_content/blogs with the right frontmatter. There is no database — the content layer reads files off disk at request time, so no code changes are needed.',
		},
		{
			question: 'Can I use my own design system or components?',
			answer:
				'Yes. Generic UI primitives live in src/components/ui and can be swapped or extended with more shadcn components. App-specific components in src/_components consume typed content objects as props, so styling and content stay decoupled.',
		},
		{
			question: 'Is this connected to a CMS or database?',
			answer:
				"Not out of the box. All copy and data lives in src/_content as typed objects, which keeps it CMS-agnostic — you can wire up a real CMS or database later without changing the components that consume it.",
		},
		{
			question: 'How do I customize SEO defaults?',
			answer:
				'Default metadata lives in src/lib/seo.ts as defaultSEO, applied in the root layout. Individual pages can override or extend it via their own metadata or generateMetadata export.',
		},
	],
};
