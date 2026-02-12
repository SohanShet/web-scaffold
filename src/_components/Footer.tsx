import Link from 'next/link';
import { FooterContent } from '../_content/types';

interface FooterProps {
	content: FooterContent;
}

export function Footer({ content }: FooterProps) {
	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{content.sections.map((section) => (
						<div key={section.title} className="flex flex-col gap-4">
							<h3 className="font-semibold">{section.title}</h3>
							<ul className="flex flex-col gap-2">
								{section.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						{content.copyright}
					</p>

					<div className="flex items-center gap-4">
						{content.socials.map((social) => (
							<Link
								key={social.platform}
								href={social.href}
								className="text-muted-foreground hover:text-foreground transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">{social.platform}</span>
								{/* Placeholder for actual icons, using text for now or simple SVGs if needed */}
								{social.platform}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
