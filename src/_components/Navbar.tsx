'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarContent } from '../_content/types';

import { CTAButton } from './custom-buttons/CTAButton';

interface NavbarProps {
	content: NavbarContent;
}

export function Navbar({ content }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="border-b bg-background sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href={content.logo.href} className="font-bold text-xl">
					{content.logo.text}
				</Link>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center gap-6 h-full">
					{content.links.map((link) => {
						const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
						return (
							<Link
								key={link.href}
								href={link.href}
								className={`text-sm font-medium transition-colors relative h-full flex items-center ${isActive
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
									}`}
							>
								{link.label}
								{isActive && (
									<span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
								)}
							</Link>
						);
					})}
				</div>

				{/* CTA and Mobile Toggle */}
				<div className="flex items-center gap-4">
					<CTAButton href={content.cta.href} className="hidden md:inline-flex h-9">
						{content.cta.label}
					</CTAButton>

					{/* Mobile Menu Trigger */}
					<button
						className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? "Close menu" : "Open menu"}
					>
						{isOpen ? (
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
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
						) : (
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
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden border-t bg-background">
					<div className="container mx-auto px-4 py-4 flex flex-col gap-2">
						{content.links.map((link) => {
							const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
							return (
								<Link
									key={link.href}
									href={link.href}
									className={`text-base font-medium px-4 py-2 rounded-md transition-colors ${isActive
										? "bg-muted text-foreground"
										: "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
										}`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							);
						})}
						<div className="pt-4 mt-2 border-t">
							<CTAButton
								href={content.cta.href}
								className="w-full"
								onClick={() => setIsOpen(false)}
							>
								{content.cta.label}
							</CTAButton>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
