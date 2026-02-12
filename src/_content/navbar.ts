import { NavbarContent } from './types';

export const navbarContent: NavbarContent = {
	logo: {
		text: 'WebScaffold',
		href: '/',
	},
	links: [
		{ label: 'Features', href: '/features' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'About', href: '/about' },
		{ label: 'Blog', href: '/blog' },
	],
	cta: {
		label: 'Get Started',
		href: '/login',
	},
};
