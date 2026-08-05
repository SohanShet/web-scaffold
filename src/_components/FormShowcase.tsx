/**
 * ============================================================================
 * TEMPLATE SHOWCASE — delete me when you start a real project
 * ============================================================================
 * Demos the forms foundation (React Hook Form + Zod + the reusable field
 * components in src/components/form/FormFields.tsx) on the homepage. See
 * the "Forms" section of CLAUDE.md for the full pattern. Removing it takes
 * two steps:
 *
 *   1. Delete this file.
 *   2. In src/app/(marketing)/page.tsx, remove the FormShowcase import
 *      and its <FormShowcase /> usage.
 *
 * The form field components themselves are unaffected either way.
 * ============================================================================
 */
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Section } from "./Section";
import { CTAButton } from "./custom-buttons/CTAButton";
import { Form } from "@/components/ui/form";
import {
	CheckboxField,
	SelectField,
	SwitchField,
	TextField,
	TextareaField,
} from "@/components/form/FormFields";

const roleOptions = [
	{ label: "Developer", value: "developer" },
	{ label: "Designer", value: "designer" },
	{ label: "Product Manager", value: "product-manager" },
];

// 1. Zod schema — the single source of truth for validation.
const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters."),
	email: z.email("Enter a valid email address."),
	role: z.string().min(1, "Please select a role."),
	bio: z.string().max(280, "Keep it under 280 characters.").optional(),
	subscribe: z.boolean(),
	terms: z.boolean().refine((value) => value === true, {
		message: "You must accept the terms to continue.",
	}),
});

type FormValues = z.infer<typeof formSchema>;

export function FormShowcase() {
	const [submitted, setSubmitted] = useState(false);

	// 2. React Hook Form, wired to the schema via zodResolver.
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			role: "",
			bio: "",
			subscribe: true,
			terms: false,
		},
	});

	// 3. Submission handler — only runs once validation passes.
	function onSubmit(values: FormValues) {
		console.log("Form submitted:", values);
		setSubmitted(true);
		form.reset();
	}

	return (
		<Section id="forms">
			<div className="flex flex-col items-center text-center gap-4 mb-12">
				<h2 className="text-sm font-bold tracking-wider uppercase text-primary">
					Forms
				</h2>
				<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
					One pattern for every form
				</h3>
				<p className="text-lg text-muted-foreground max-w-xl">
					React Hook Form + Zod, wired through the reusable field components
					in <code className="text-sm">src/components/form/FormFields.tsx</code>.
				</p>
			</div>

			<div className="mx-auto max-w-lg bg-background rounded-2xl border border-border p-8 shadow-sm">
				{/* 4. Usage of the reusable field components. */}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
					>
						<TextField
							control={form.control}
							name="name"
							label="Full name"
							placeholder="Jane Doe"
							required
						/>
						<TextField
							control={form.control}
							name="email"
							label="Email"
							type="email"
							placeholder="jane@example.com"
							required
						/>
						<SelectField
							control={form.control}
							name="role"
							label="Role"
							placeholder="Select a role"
							options={roleOptions}
							required
						/>
						<TextareaField
							control={form.control}
							name="bio"
							label="Bio"
							placeholder="Tell us a little about yourself"
							description="Optional, max 280 characters."
						/>
						<SwitchField
							control={form.control}
							name="subscribe"
							label="Subscribe to updates"
							description="Occasional product news, no spam."
						/>
						<CheckboxField
							control={form.control}
							name="terms"
							label="I agree to the terms and conditions"
							required
						/>

						<CTAButton
							type="submit"
							disabled={form.formState.isSubmitting}
							className="w-full"
						>
							{form.formState.isSubmitting ? "Submitting..." : "Submit"}
						</CTAButton>

						{submitted && (
							<p className="text-sm text-center text-green-600" role="status">
								Thanks! Check the console for the submitted values.
							</p>
						)}
					</form>
				</Form>
			</div>
		</Section>
	);
}
