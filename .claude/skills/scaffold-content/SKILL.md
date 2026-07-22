---
name: scaffold-content
description: Use when adding a new blog post, marketing page, or content-backed section (like FAQ) to a project built on the Web Scaffold template. Ensures the new content follows this codebase's existing conventions (typed _content/ objects, route group placement, hand-maintained sitemap, SEO metadata, JSON-LD) instead of inventing new patterns.
---

# Scaffolding new content in Web Scaffold

This template's one governing rule: **content/copy never lives inside components** — it's a typed object in `src/_content/`, passed in as a prop. Read `AGENTS.md` at the repo root first if you haven't already; it has the full directory map and conventions. This skill is the step-by-step for the three things people add most often.

Ask which of these applies (or infer from the request), then follow the matching checklist.

## 1. New blog post

1. Create `src/_content/blogs/<slug>.mdx`.
2. Frontmatter fields (see any existing post in that folder for a live example):
   ```yaml
   title: "..."
   excerpt: "..."
   publishedAt: "YYYY-MM-DD"
   updatedAt: "YYYY-MM-DD"
   author:
     name: "..."
     role: "..."
     avatar: "https://..."
   category: "Technology" | "Design" | "Development" | "Lifestyle" | "Business"
   tags: ["...", "..."]
   image: "https://..."
   readTime: "N min read"   # optional — auto-computed from word count if omitted
   featured: true            # optional — surfaces it in featured/carousel sections
   ```
3. Nothing else to wire up. `src/_content/blogs/index.ts` reads the `.mdx` directory off disk at request time (`getAllBlogs`/`getBlogBySlug`/etc., memoized with React `cache()`) — there is no database and no manual index to update.
4. It will automatically appear in `sitemap.ts` (blog entries are generated from `getAllBlogs()`, unlike static pages — see checklist 2 below) and in `generateStaticParams` for `blog/[slug]/page.tsx`.

## 2. New marketing page

1. Create `src/app/(marketing)/<route>/page.tsx`. Keep it a thin wrapper, not where content lives:
   ```tsx
   import type { Metadata } from "next";
   import { someContent } from "@/_content/some-content";
   import { SomeComponent } from "@/_components/SomeComponent";

   export const metadata: Metadata = {
     title: "... | Web Scaffold",
     description: "...",
   };

   export default function SomePage() {
     return <SomeComponent content={someContent} />;
   }
   ```
   Reference `src/app/(marketing)/legal/privacy-policy/page.tsx` for the minimal real example.
2. **Manually add the route** to the `routes` array in `src/app/sitemap.ts`. Unlike blog posts, static marketing pages are NOT auto-discovered from the filesystem — this is a hand-maintained list and it's easy to forget.
3. If the page should be globally reachable, add a link in `src/_content/navbar.ts` and/or `src/_content/footer.ts` (typed as `NavbarLink`/`FooterLink` in `_content/types.ts`).
4. Do NOT put this page under `src/app/(admin)/` unless it's actually an admin/dashboard view — that route group currently has no layout of its own.

## 3. New content-backed section (e.g. something like the existing FAQ section)

1. Add the shape to `src/_content/types.ts` (follow the pattern of `FaqContent`/`FaqItem`).
2. Add the data file, e.g. `src/_content/<name>.ts`, exporting a typed const.
3. Build a presentational component in `src/_components/<Name>Section.tsx` that takes `content` as its only prop and renders it — don't fetch or hardcode data inside the component. Use the `Section` wrapper (`src/_components/Section.tsx`) for consistent spacing, and existing `components/ui/*` primitives (accordion, carousel, etc.) rather than new bespoke markup.
4. If the content is SEO-relevant (FAQs, articles, etc.), add a builder function to `src/lib/structured-data.ts` and render it on the page via `<JsonLd data={...} />` (see `getFaqSchema` + the contact/home pages for the pattern).
5. Drop the component into whichever page(s) need it — sections are meant to be reused across pages, not one-off per route.

## Before finishing, double check

- No page-specific copy ended up hardcoded in a `.tsx` file — it should be in `_content/`.
- New static routes were added to `sitemap.ts`.
- If the page touches canonical/OG URLs, check whether the surrounding code reads `NEXT_PUBLIC_SITE_URL` (validated via `src/env.ts`) or `NEXT_PUBLIC_BASE_URL` (read raw via `process.env` with a fallback) — they are two different variables in this codebase, not aliases of each other.
