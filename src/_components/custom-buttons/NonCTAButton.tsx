import Link from 'next/link';
import React from 'react';

type LinkButtonProps = React.ComponentProps<typeof Link> & {
	href: string;
	children: React.ReactNode;
	className?: string;
};

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	href?: undefined;
	children: React.ReactNode;
	className?: string;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function NonCTAButton({ href, children, className = '', ...props }: ButtonProps) {
	const baseStyles = "inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95";

	const combinedClassName = `${baseStyles} ${className}`;

	if (href) {
		const linkProps = props as Omit<LinkButtonProps, 'href' | 'children' | 'className'>;

		return (
			<Link href={href} className={combinedClassName} {...linkProps}>
				{children}
			</Link>
		);
	}

	const buttonProps = props as NativeButtonProps;

	return (
		<button className={combinedClassName} {...buttonProps}>
			{children}
		</button>
	);
}
