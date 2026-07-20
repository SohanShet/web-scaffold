import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from './Section';
import type { FaqContent } from '@/_content/types';

interface FaqSectionProps {
	content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps) {
	return (
		<Section id="faq" containerClassName="max-w-3xl">
			<div className="flex flex-col items-center text-center gap-4 mb-12">
				<h2 className="text-sm font-bold tracking-wider uppercase text-primary">
					FAQ
				</h2>
				<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
					{content.title}
				</h3>
				{content.subtitle && (
					<p className="text-lg text-muted-foreground max-w-xl">
						{content.subtitle}
					</p>
				)}
			</div>

			<Accordion type="single" collapsible className="w-full">
				{content.items.map((item, index) => (
					<AccordionItem key={item.question} value={`item-${index}`}>
						<AccordionTrigger className="text-base font-semibold">
							{item.question}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							{item.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</Section>
	);
}
