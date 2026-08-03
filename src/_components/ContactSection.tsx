'use client';

import React, { useState } from 'react';
import { CTAButton } from './custom-buttons/CTAButton';
import { Section } from './Section';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
	const [status, setStatus] = useState<FormStatus>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus('submitting');
		setErrorMessage('');

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: formData.get('name'),
					email: formData.get('email'),
					subject: formData.get('subject'),
					message: formData.get('message'),
					company: formData.get('company'),
				}),
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

					<div className="flex flex-col gap-6 mt-4">
						<div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 shadow-sm transition-all hover:shadow-md">
							<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">Phone</h3>
								<p className="text-muted-foreground">+1 (555) 000-0000</p>
							</div>
						</div>

						<div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 shadow-sm transition-all hover:shadow-md">
							<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><rect width="20" height="16" x="2" y="4" rx="2" /></svg>
							</div>
							<div>
								<h3 className="font-semibold text-foreground">Email</h3>
								<p className="text-muted-foreground">hello@example.com</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Content (Form) */}
				<div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border p-8 md:p-10 shadow-2xl shadow-primary/10">
					<form className="flex flex-col gap-6" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-2">
								<label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									placeholder="John Doe"
									className="h-12 px-4 rounded-lg bg-muted/50 border border-border focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder="john@example.com"
									className="h-12 px-4 rounded-lg bg-muted/50 border border-border focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								required
								placeholder="How can we help?"
								className="h-12 px-4 rounded-lg bg-muted/50 border border-border focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
							<textarea
								id="message"
								name="message"
								required
								rows={4}
								placeholder="Tell us more about your project..."
								className="p-4 rounded-lg bg-muted/50 border border-border focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground resize-none"
							></textarea>
						</div>

						{/* Honeypot: hidden from real users; bots that auto-fill forms tend to populate it */}
						<div
							className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
							aria-hidden="true"
						>
							<label htmlFor="company">Company</label>
							<input
								type="text"
								id="company"
								name="company"
								tabIndex={-1}
								autoComplete="off"
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
				</div>
			</div>
		</Section>
	);
}
