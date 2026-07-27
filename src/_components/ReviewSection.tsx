import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from './Section';
import type { ReviewContent } from '@/_content/types';
import { cn } from '@/lib/utils';

interface ReviewSectionProps {
	content: ReviewContent;
}

function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={i}
					className={cn(
						'size-4',
						i < rating
							? 'fill-primary text-primary'
							: 'fill-transparent text-muted-foreground/30'
					)}
				/>
			))}
		</div>
	);
}

export function ReviewSection({ content }: ReviewSectionProps) {
	return (
		<Section id="reviews">
			<div className="flex flex-col items-center text-center gap-4 mb-12">
				<h2 className="text-sm font-bold tracking-wider uppercase text-primary">
					Reviews
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

			<div className="grid gap-6 md:grid-cols-3">
				{content.items.map((item) => (
					<Card key={item.name}>
						<CardContent className="flex flex-col gap-4">
							<StarRating rating={item.rating} />
							<p className="text-sm text-muted-foreground">
								&ldquo;{item.quote}&rdquo;
							</p>
							<div>
								<p className="text-sm font-semibold text-foreground">
									{item.name}
								</p>
								{item.role && (
									<p className="text-xs text-muted-foreground">{item.role}</p>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
