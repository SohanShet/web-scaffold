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
