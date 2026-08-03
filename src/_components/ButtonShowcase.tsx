/**
 * ============================================================================
 * TEMPLATE SHOWCASE — delete me when you start a real project
 * ============================================================================
 * Demos the button components in src/_components/custom-buttons on the
 * homepage (this replaces the old standalone /buttons demo route). Removing
 * it takes two steps:
 *
 *   1. Delete this file.
 *   2. In src/app/(marketing)/page.tsx, remove the ButtonShowcase import
 *      and its <ButtonShowcase /> usage.
 *
 * The custom-buttons components themselves are unaffected either way.
 * ============================================================================
 */
'use client';

import { Section } from './Section';
import { CTAButton } from './custom-buttons/CTAButton';
import { NonCTAButton } from './custom-buttons/NonCTAButton';
import { ContactUsButton } from './custom-buttons/ContactUsButton';
import { BackButton } from './custom-buttons/BackButton';
import { useLoading } from '@/hooks/useLoading';

export function ButtonShowcase() {
	const { withLoading } = useLoading();

	const handleDemoLoading = async () => {
		await withLoading(async () => {
			await new Promise((resolve) => setTimeout(resolve, 3000));
		});
	};

	return (
		<Section id="buttons">
			<div className="flex flex-col items-center text-center gap-4 mb-12">
				<h2 className="text-sm font-bold tracking-wider uppercase text-primary">
					Buttons
				</h2>
				<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
					Every action, one system
				</h3>
				<p className="text-lg text-muted-foreground max-w-xl">
					A small set of button variants, already wired to the loading provider and ready to reuse.
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col gap-3">
					<p className="text-sm font-medium text-foreground">CTA</p>
					<div className="flex flex-wrap gap-3">
						<CTAButton>Get Started</CTAButton>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<p className="text-sm font-medium text-foreground">Non-CTA</p>
					<div className="flex flex-wrap gap-3">
						<NonCTAButton>Learn More</NonCTAButton>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<p className="text-sm font-medium text-foreground">Contact Us</p>
					<div className="flex flex-wrap gap-3">
						<ContactUsButton href="/#contact">Get in Touch</ContactUsButton>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<p className="text-sm font-medium text-foreground">Back</p>
					<div className="flex flex-wrap gap-3">
						<BackButton href="/">Go Back</BackButton>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<p className="text-sm font-medium text-foreground">Global loading</p>
					<div className="flex flex-wrap gap-3">
						<CTAButton onClick={handleDemoLoading}>Trigger (3s)</CTAButton>
					</div>
				</div>
			</div>
		</Section>
	);
}
