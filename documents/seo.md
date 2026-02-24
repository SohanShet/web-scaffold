Dynamic Metadata:
Implemented 
generateMetadata
 in 
src/app/blog/[slug]/page.tsx
. This dynamically generates titles, descriptions, and OpenGraph images based on the specific blog post content.
Added specific metadata for the Home, About, and Contact pages to ensure each has unique, search-engine-friendly tags.
Search Engine Indexing:
robots.ts
: Configured crawler rules to allow full site indexing while protecting internal API and Next.js paths.
sitemap.ts
: Designed a dynamic sitemap that automatically includes all blog posts and main static routes, with proper lastModified dates.
Structured Data (JSON-LD):
Created a reusable 
JsonLd
 component in 
src/components/seo/JsonLd.tsx
.
Implemented centralized schema generators in 
src/lib/structured-data.ts
.
Organization Schema: Added to the root layout for site-wide brand identification.
Website Schema: Added to the homepage with search action support.
Article Schema: Dynamically injected into blog posts for rich snippet results in search engines.
Canonical URLs:
Ensured every page has a canonical URL (using alternates: { canonical: '...' }) to prevent duplicate content issues and consolidate link equity.
File Structure Changes:
src/lib/seo.ts
 (New)
src/lib/structured-data.ts
 (New)
src/components/seo/JsonLd.tsx
 (New)
src/app/robots.ts
 (New)
src/app/sitemap.ts
 (New)
src/app/layout.tsx
 (Updated)
src/app/page.tsx
 (Updated)
src/app/about/page.tsx
 (Updated)
src/app/contact/page.tsx
 (Updated)
src/app/blog/[slug]/page.tsx
 (Updated)
These changes ensure the scaffold is fully optimized for crawlability, indexing, and high-quality search engine rankings right out of the box.