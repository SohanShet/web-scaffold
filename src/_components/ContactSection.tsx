'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CTAButton } from './custom-buttons/CTAButton';
import { Section } from './Section';
import { Form } from '@/components/ui/form';
import { TextField, TextareaField } from '@/components/form/FormFields';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// Mirrors the server-side schema in src/app/api/contact/route.ts.
const contactFormSchema = z.object({
	name: z.string().trim().min(1, 'Name is required').max(100),
	email: z.email('Invalid email address').max(200),
	subject: z.string().trim().min(1, 'Subject is required').max(150),
	message: z.string().trim().min(1, 'Message is required').max(5000),
	// Honeypot: hidden from real users; bots that auto-fill forms tend to populate it.
	company: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
			company: '',
		},
	});

	async function onSubmit(values: ContactFormValues) {
		setStatus('submitting');
		setErrorMessage('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			});

			const data = await response.json().catch(() => null);

			if (!response.ok) {
				throw new Error(data?.error ?? 'Something went wrong. Please try again.');
			}

			setStatus('success');
			form.reset();
		} catch (err) {
			setStatus('error');
			setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
		}
	}

	return (
		<Section id="contact" className="bg-muted/30">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				{/* Left Content */}
				<div className="flex flex-col gap-6">
					<div>
						<h2 className="text-sm font-bold tracking-wider uppercase text-primary mb-3">
							Contact Us
						</h2>
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
							Let&apos;s build something <span className="text-primary italic">extraordinary</span> together.
						</h1>
					</div>
					<p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
						Have a project in mind or just want to say hello? Drop us a message and we&apos;ll get back to you within 24 hours.
					</p>
				</div>

				{/* Right Content (Form) */}
				<div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border p-8 md:p-10 shadow-2xl shadow-primary/10">
					<Form {...form}>
						<form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<TextField
									control={form.control}
									name="name"
									label="Full Name"
									placeholder="John Doe"
									required
								/>
								<TextField
									control={form.control}
									name="email"
									label="Email Address"
									type="email"
									placeholder="john@example.com"
									required
								/>
							</div>

							<TextField
								control={form.control}
								name="subject"
								label="Subject"
								placeholder="How can we help?"
								required
							/>

							<TextareaField
								control={form.control}
								name="message"
								label="Message"
								rows={4}
								placeholder="Tell us more about your project..."
								required
							/>

							{/* Honeypot: hidden from real users; bots that auto-fill forms tend to populate it */}
							<div
								className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
								aria-hidden="true"
							>
								<label htmlFor="company">Company</label>
								<input
									type="text"
									id="company"
									tabIndex={-1}
									autoComplete="off"
									{...form.register('company')}
								/>
							</div>

							<CTAButton
								type="submit"
								disabled={status === 'submitting'}
								className="w-full h-12 text-lg font-semibold mt-4 shadow-lg shadow-primary/20"
							>
								{status === 'submitting' ? 'Sending...' : 'Send Message'}
							</CTAButton>

							{status === 'success' && (
								<p className="text-sm text-center text-green-600" role="status">
									Thanks! Your message has been sent.
								</p>
							)}

							{status === 'error' && (
								<p className="text-sm text-center text-destructive" role="alert">
									{errorMessage}
								</p>
							)}

							<p className="text-xs text-center text-muted-foreground mt-2">
								By clicking send, you agree to our <span className="underline cursor-pointer hover:text-foreground">Privacy Policy</span>.
							</p>
						</form>
					</Form>
				</div>
			</div>
		</Section>
	);
}
