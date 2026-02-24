real scaffold architecture 👌
Since you're building a reusable web scaffold, SEO must be:

✅ Centralised

✅ Scalable

✅ Dynamic

✅ CMS-ready in future

✅ Clean for Server Components

Let’s design this properly for Next.js App Router.

🔥 1. High-Level SEO Architecture for Your Scaffold

We’ll structure SEO into 5 layers:

Global Metadata (layout.tsx)

Central Metadata Config (lib/seo.ts)

Dynamic Metadata per Page

robots.ts + sitemap.ts (Next native)

Reusable JSON-LD Component

📁 Recommended Folder Structure

Add this:

src
 ├── app
 │    ├── robots.ts
 │    ├── sitemap.ts
 │    ├── layout.tsx
 │    ├── blog
 │    │     ├── [slug]
 │    │     │     └── page.tsx
 │
 ├── lib
 │    ├── seo.ts
 │    ├── structured-data.ts
 │
 ├── components
 │    ├── seo
 │    │     ├── JsonLd.tsx

We are centralising SEO logic in /lib.

🧠 2. Centralised Metadata (VERY IMPORTANT)

Yes — you should absolutely centralise metadata.

Create:

src/lib/seo.ts
import { Metadata } from "next";

const baseUrl = "https://yoursite.com";

export const defaultSEO: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Your Brand Name",
    template: "%s | Your Brand Name",
  },
  description: "Your default description",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Your Brand Name",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
🌍 3. Apply Global Metadata in layout.tsx
import { defaultSEO } from "@/lib/seo";

export const metadata = defaultSEO;

Now every page inherits this.

🚀 4. Dynamic Metadata for Blog Pages

This is where Server Components shine.

In:

app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { blogs } from "@/ _content/blogs";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {

  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
      type: "article",
    },
  };
}

✅ This is SEO gold
✅ Fully dynamic
✅ Server-rendered
✅ Indexable

🤖 5. robots.txt (Next Native)

Create:

app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://yoursite.com/sitemap.xml",
  };
}

Next automatically generates /robots.txt.

🗺️ 6. Sitemap (Dynamic + Scalable)
app/sitemap.ts
import { MetadataRoute } from "next";
import { blogs } from "@/ _content/blogs";

export default function sitemap(): MetadataRoute.Sitemap {

  const blogEntries = blogs.map(blog => ({
    url: `https://yoursite.com/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
  }));

  return [
    {
      url: "https://yoursite.com",
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}

Now your sitemap auto-updates when blogs change.

🧾 7. JSON-LD (Structured Data)

Very important for:

Rich snippets

Blog schema

Organization schema

FAQ schema later

Create:

src/components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
📦 Example Blog JSON-LD Usage

Inside blog page:

import { JsonLd } from "@/components/seo/JsonLd";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: blog.title,
  description: blog.excerpt,
  author: {
    "@type": "Person",
    name: blog.author,
  },
};

<JsonLd data={blogSchema} />
🧠 8. How Server Components Improve SEO

Because:

HTML is rendered on server

Metadata is rendered server-side

No client hydration needed for SEO tags

Faster TTFB

Better crawlability

Google LOVES this.

🏗️ 9. Canonical URLs (Important)

Add in metadata:

alternates: {
  canonical: `https://yoursite.com/blog/${blog.slug}`,
},

This prevents duplicate content issues.

🧩 10. Should We Centralise Metadata?

YES — but in layers.

Best practice:

Level	Where	Purpose
Global	lib/seo.ts	Brand defaults
Layout	layout.tsx	Site-wide
Page	generateMetadata()	Dynamic override
JSON-LD	Component	Structured data

That’s scalable.

💎 Final Scaffold SEO Structure (Clean & Professional)
src
 ├── app
 │    ├── layout.tsx
 │    ├── robots.ts
 │    ├── sitemap.ts
 │
 ├── lib
 │    ├── seo.ts
 │    ├── structured-data.ts
 │
 ├── components
 │    ├── seo
 │    │     ├── JsonLd.tsx