import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
	containerClassName?: string;
	fullWidth?: boolean;
}

export function Section({
	children,
	id,
	className,
	containerClassName,
	fullWidth = false,
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"w-full py-16 md:py-20",
				className
			)}
		>
			<div
				className={cn(
					fullWidth
						? "w-full"
						: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					containerClassName
				)}
			>
				{children}
			</div>
		</section>
	);
}




// What This Gives You
// Default behavior:

// py-16 md:py-20

// Centered layout

// Responsive padding

// Max width

// Clean spacing rhythm

// But user can override:
// <Section className="bg-muted py-24">


// or

// <Section containerClassName="max-w-4xl">


// or

// <Section fullWidth></Section>