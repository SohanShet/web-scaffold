import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
	children?: React.ReactNode;
	className?: string;
	target?: string;
	rel?: string;
}

export function BackButton({ href, children, className = '', ...props }: ButtonProps) {
	const baseStyles = "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95";

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
				<path d="m15 18-6-6 6-6" />
			</svg>
			{children || "Back"}
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
