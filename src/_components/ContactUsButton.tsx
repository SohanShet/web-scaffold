import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
	children?: React.ReactNode;
	className?: string;
	target?: string;
	rel?: string;
}

export function ContactUsButton({ href, children, className = '', ...props }: ButtonProps) {
	const baseStyles = "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground border border-primary transition-all hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95 shadow-sm";

	const combinedClassName = `${baseStyles} ${className}`;

	const content = (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect width="20" height="16" x="2" y="4" rx="2" />
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
			</svg>
			{children || "Contact Us"}
		</>
	);

	if (href) {
		return (
			<Link href={href} className={combinedClassName} {...(props as any)}>
				{content}
			</Link>
		);
	}

	return (
		<button className={combinedClassName} {...props}>
			{content}
		</button>
	);
}
