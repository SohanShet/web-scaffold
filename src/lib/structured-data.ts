export function getOrganizationSchema() {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";

	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Web Scaffold",
		url: baseUrl,
		logo: `${baseUrl}/logo.png`,
		sameAs: [
			"https://twitter.com/sohanshet",
			"https://github.com/sohanshet",
		],
	};
}

export function getWebsiteSchema() {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webscaffold.com";

	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Web Scaffold",
		url: baseUrl,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${baseUrl}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};
}
