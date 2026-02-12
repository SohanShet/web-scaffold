import { CTAButton } from "@/_components/CTAButton";
import { NonCTAButton } from "@/_components/NonCTAButton";
import { ContactUsButton } from "@/_components/ContactUsButton";
import { BackButton } from "@/_components/BackButton";

export default function ButtonsDemo() {
	return (
		<div className="container mx-auto py-20 px-4">
			<BackButton href="/" className="mb-8" />

			<h1 className="text-3xl font-bold mb-10">Button Components Demo</h1>

			<div className="grid gap-12">
				<section>
					<h2 className="text-xl font-semibold mb-4">CTA Button</h2>
					<div className="flex flex-wrap gap-4 items-center">
						<CTAButton>Default CTA</CTAButton>
						<CTAButton href="/">As Link</CTAButton>
						<CTAButton disabled>Disabled CTA</CTAButton>
						<CTAButton className="bg-blue-600 border-blue-600 hover:text-blue-600">Custom Styled</CTAButton>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">Non-CTA Button</h2>
					<div className="flex flex-wrap gap-4 items-center">
						<NonCTAButton>Default Non-CTA</NonCTAButton>
						<NonCTAButton href="/">As Link</NonCTAButton>
						<NonCTAButton disabled>Disabled Non-CTA</NonCTAButton>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">Contact Us Button</h2>
					<div className="flex flex-wrap gap-4 items-center">
						<ContactUsButton>Get in Touch</ContactUsButton>
						<ContactUsButton href="mailto:hello@example.com">Email Us</ContactUsButton>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">Back Button</h2>
					<div className="flex flex-wrap gap-4 items-center">
						<BackButton>Go Back</BackButton>
						<BackButton href="/about">Back to About</BackButton>
					</div>
				</section>
			</div>
		</div>
	);
}
