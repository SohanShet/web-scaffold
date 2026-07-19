import { AlertTriangle } from "lucide-react";

import { LegalContent } from "@/_content/types";

interface LegalPageContentProps {
	content: LegalContent;
}

export function LegalPageContent({ content }: LegalPageContentProps) {
	return (
		<div className="w-full py-16 md:py-20">
			<div className="mx-auto max-w-3xl px-4">
				<h1 className="font-bold text-3xl md:text-4xl text-foreground tracking-tight">
					{content.title}
				</h1>
				<p className="mt-3 text-muted-foreground text-sm">
					Last updated: {content.lastUpdated}
				</p>

				<div className="flex gap-3 bg-amber-50 dark:bg-amber-950/30 mt-8 p-4 border border-amber-300 dark:border-amber-800/50 rounded-xl text-amber-900 dark:text-amber-200 text-sm">
					<AlertTriangle className="flex-shrink-0 mt-0.5 w-5 h-5" strokeWidth={1.75} />
					<p>{content.disclaimer}</p>
				</div>

				<div className="mt-12 mdx-content">
					{content.sections.map((section) => (
						<section key={section.title} className="mb-10">
							<h2>{section.title}</h2>
							{section.content.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
