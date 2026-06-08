import { ImageResponse } from "next/og";

import { getBlogBySlug, getBlogSlugs } from "@/_content/blogs";

export const alt = "Blog Post";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
	return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function Image({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);

	const title = blog?.title ?? "Post Not Found";
	const description = blog?.excerpt ?? "This blog post is not available.";
	const publishedAt = blog?.publishedAt ?? "";
	const publishedDate = blog
		? new Date(publishedAt).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
				timeZone: "UTC",
		  })
		: "";

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					padding: "40px",
					background: "linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%)",
					color: "#111827",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: "100%",
						border: "1px solid #e7e5e4",
						borderRadius: "28px",
						padding: "48px",
						backgroundColor: "#ffffff",
					}}
				>
					<div
						style={{
							display: "flex",
							fontSize: "22px",
							fontWeight: 600,
							color: "#57534e",
						}}
					>
						Web Scaffold
					</div>
					<div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
						<div
							style={{
								display: "flex",
								fontSize: "58px",
								fontWeight: 700,
								lineHeight: 1.05,
								letterSpacing: "-0.03em",
								maxWidth: "920px",
							}}
						>
							{title}
						</div>
						<div
							style={{
								display: "flex",
								fontSize: "26px",
								lineHeight: 1.45,
								color: "#44403c",
								maxWidth: "860px",
							}}
						>
							{description}
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							fontSize: "20px",
							color: "#78716c",
						}}
					>
						<div style={{ display: "flex" }}>{blog?.author.name ?? "Web Scaffold"}</div>
						<div style={{ display: "flex" }}>{publishedDate}</div>
					</div>
				</div>
			</div>
		),
		size
	);
}
