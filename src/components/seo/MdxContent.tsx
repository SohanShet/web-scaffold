import type { ComponentPropsWithoutRef } from "react";

type TableProps = ComponentPropsWithoutRef<"table">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const mdxComponents = {
	table: ({ children, ...props }: TableProps) => (
		<div className="mdx-table-wrapper">
			<table {...props}>{children}</table>
		</div>
	),
	pre: ({ children, ...props }: PreProps) => (
		<pre {...props} className="mdx-pre">
			{children}
		</pre>
	),
	code: ({ children, ...props }: CodeProps) => <code {...props}>{children}</code>,
	blockquote: ({ children, ...props }: BlockquoteProps) => (
		<blockquote {...props}>{children}</blockquote>
	),
};
