import Link from 'next/link';
import { NavbarContent } from '../_content/types';

interface NavbarProps {
	content: NavbarContent;
}

export function Navbar({ content }: NavbarProps) {
	return (
		<nav className="border-b bg-background sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href={content.logo.href} className="font-bold text-xl">
					{content.logo.text}
				</Link>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center gap-6">
					{content.links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* CTA */}
				<div>
					<Link
						href={content.cta.href}
						className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					>
						{content.cta.label}
					</Link>

					{/* Mobile Menu Trigger (Placeholder) */}
					<button className="md:hidden p-2">
						<span className="sr-only">Open menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6"
						>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}
