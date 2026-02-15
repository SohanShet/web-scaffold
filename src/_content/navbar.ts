import { NavbarContent } from './types';

export const navbarContent: NavbarContent = {
	logo: {
		text: 'WebScaffold',
		href: '/',
	},
	links: [
		{ label: 'Home', href: '/' },
		{ label: 'Features', href: '/features' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'About', href: '/about' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Buttons', href: '/buttons' },
		{ label: 'Contact', href: '/contact' },
	],
	cta: {
		label: 'Get Started',
		href: '/login',
	},
};
