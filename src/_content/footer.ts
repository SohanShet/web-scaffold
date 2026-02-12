import { FooterContent } from './types';

export const footerContent: FooterContent = {
	sections: [
		{
			title: 'Product',
			links: [
				{ label: 'Features', href: '/features' },
				{ label: 'Pricing', href: '/pricing' },
				{ label: 'Integrations', href: '/integrations' },
				{ label: 'Changelog', href: '/changelog' },
			],
		},
		{
			title: 'Resources',
			links: [
				{ label: 'Documentation', href: '/docs' },
				{ label: 'API Reference', href: '/api' },
				{ label: 'Community', href: '/community' },
				{ label: 'Help Center', href: '/help' },
			],
		},
		{
			title: 'Company',
			links: [
				{ label: 'About', href: '/about' },
				{ label: 'Careers', href: '/careers' },
				{ label: 'Blog', href: '/blog' },
				{ label: 'Contact', href: '/contact' },
			],
		},
		{
			title: 'Legal',
			links: [
				{ label: 'Privacy', href: '/privacy' },
				{ label: 'Terms', href: '/terms' },
				{ label: 'Security', href: '/security' },
			],
		},
	],
	copyright: `© ${new Date().getFullYear()} WebScaffold. All rights reserved.`,
	socials: [
		{ platform: 'Twitter', href: 'https://twitter.com' },
		{ platform: 'GitHub', href: 'https://github.com' },
		{ platform: 'LinkedIn', href: 'https://linkedin.com' },
	],
};
