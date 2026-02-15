import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: string;
	children: React.ReactNode;
	className?: string;
	target?: string;
	rel?: string;
}

export function NonCTAButton({ href, children, className = '', ...props }: ButtonProps) {
	const baseStyles = "inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95";

	const combinedClassName = `${baseStyles} ${className}`;

	if (href) {
		return (
			<Link href={href} className={combinedClassName} {...(props as any)}>
				{children}
			</Link>
		);
	}

	return (
		<button className={combinedClassName} {...props}>
			{children}
		</button>
	);
}
