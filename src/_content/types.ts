export interface NavbarLink {
	label: string;
	href: string;
}

export interface NavbarContent {
	logo: {
		text: string;
		href: string;
		image?: string;
	};
	links: NavbarLink[];
	cta: {
		label: string;
		href: string;
	};
}

export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterSection {
	title: string;
	links: FooterLink[];
}

export interface FooterContent {
	sections: FooterSection[];
	copyright: string;
	socials: {
		platform: string;
		href: string;
		icon?: string; // Icon name or SVG path
	}[];
}

export type BlogCategory = 'Technology' | 'Design' | 'Development' | 'Lifestyle' | 'Business';

export interface Author {
	name: string;
	avatar: string;
	role: string;
}

export interface Blog {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	author: Author;
	date: string;
	category: BlogCategory;
	tags: string[];
	imageUrl: string;
	readTime: string;
	featured?: boolean;
}
