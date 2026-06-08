import Link from 'next/link';
import React from 'react';

type LinkButtonProps = React.ComponentProps<typeof Link> & {
	href: string;
	children?: React.ReactNode;
	className?: string;
};

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	href?: undefined;
	children?: React.ReactNode;
	className?: string;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

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
		const linkProps = props as Omit<LinkButtonProps, 'href' | 'children' | 'className'>;

		return (
			<Link href={href} className={combinedClassName} {...linkProps}>
				{content}
			</Link>
		);
	}

	const buttonProps = props as NativeButtonProps;

	return (
		<button className={combinedClassName} {...buttonProps}>
			{content}
		</button>
	);
}
