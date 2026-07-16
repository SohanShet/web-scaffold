# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Web Scaffold is a reusable Next.js starter/boilerplate (not a product app). Its purpose is to pre-bake the foundations that get rebuilt on every new project — content architecture, blog/MDX infra, SEO, shared UI, loading states — so new projects can skip setup. Keep this "scaffold" intent in mind: prefer generic, reusable patterns over one-off product logic, and keep pieces easy to delete/replace when this is cloned into a real project.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml` is committed — don't use npm/yarn).

```bash
pnpm install
pnpm dev      # next dev
pnpm build    # next build
pnpm start    # next start (serve production build)
pnpm lint     # eslint
```

There is no test runner configured in this repo currently.

## Architecture

### Route groups and the root layout (non-obvious)

There is **no `src/app/layout.tsx`**. The root layout (the one that renders `<html>`/`<body>`, wraps `LoadingProvider`, mounts `Navbar`/`Footer`, and sets `metadata = defaultSEO`) lives at `src/app/(marketing)/layout.tsx`. Global files that must live at the true app root regardless of route group (`global-error.tsx`, `not-found.tsx`, `loading.tsx`, `robots.ts`, `sitemap.ts`, `globals.css`, `favicon.ico`) sit directly in `src/app/`.

The `(admin)` route group (`src/app/(admin)/admin/page.tsx`) currently has **no layout of its own** and the page file is empty — it's a stub for a future admin/dashboard shell, not a working route yet.

When adding a new top-level section that needs a different chrome (e.g. a dashboard without the marketing navbar/footer), give it its own route group with its own `layout.tsx` rather than assuming `src/app/(marketing)/layout.tsx` applies everywhere.

### Content layer (`src/_content/`) — the CMS-agnostic source of truth

All copy/data lives here, decoupled from components, so it can later be swapped for a real CMS without touching UI:

- `navbar.ts`, `footer.ts` — typed content objects (`NavbarContent`, `FooterContent` from `types.ts`) consumed by `src/_components/Navbar.tsx` / `Footer.tsx` via props (`content={navbarContent}`).
- `legal/*.ts` — cookie policy / privacy policy / terms content.
- `blogs/*.mdx` + `blogs/index.ts` — the blog data-access layer. `index.ts` reads `.mdx` files off disk with `fs`/`gray-matter`, parses frontmatter into the `Blog` type (`types.ts`), computes derived fields (`readTime`, formatted `date`), and exposes `getAllBlogs`/`getBlogBySlug`/`getFeaturedBlogs`/`getBlogsByCategory`/`getRelatedBlogs`/`getBlogSlugs`. Results are memoized per-request with React's `cache()`. There is no database — adding a blog post means adding an `.mdx` file with frontmatter, not editing code.

### Component split: `_components/` vs `components/`

- `src/_components/` — app-specific, content-aware composed components (Navbar, Footer, BlogCard, BlogCarousel, ContactSection, custom-buttons/*, Section, ScrollToTop, Loading). These typically take the `_content/` typed objects as props.
- `src/components/` — generic/shared building blocks, split further by concern:
  - `components/ui/` — shadcn-generated primitives (`button.tsx`, `carousel.tsx`, `breadcrumb.tsx`). Managed via `components.json` (style: new-york, base color neutral, icon lib lucide) — use `pnpm dlx shadcn@latest add <component>` to add more rather than hand-rolling them.
  - `components/seo/` — `JsonLd.tsx` (renders a `<script type="application/ld+json">`) and `MdxContent.tsx` (the default MDX element renderer overrides: table/pre/code/blockquote).
  - `components/feedback/` — `EmptyState.tsx`, `GlobalLoadingIndicator.tsx`.

### SEO stack

- `src/lib/seo.ts` exports `defaultSEO` (a Next `Metadata` object) assigned as `export const metadata` in the root layout; individual pages/routes override/extend it via their own `generateMetadata`/`metadata` export (see the blog `[slug]/page.tsx` for the dynamic pattern: per-post OG image, canonical URL, article metadata).
- `src/lib/structured-data.ts` — plain functions returning JSON-LD schema objects (`getOrganizationSchema`, `getWebsiteSchema`; blog pages build a `BlogPosting` schema inline). Rendered via `<JsonLd data={...} />`.
- `src/app/robots.ts` / `src/app/sitemap.ts` — generated from blog slugs + static routes.
- Blog detail pages use `generateStaticParams` from `getBlogSlugs()` for static generation, and render MDX via `next-mdx-remote/rsc`'s `<MDXRemote>` with `remark-gfm` + a custom `Pre` component (syntax highlighting via `rehype-pretty-code`/`shiki`, styled in `globals.css` under the "FORCE OVERRIDE REHYPE-PRETTY-CODE STYLES" section — that `!important`-heavy block exists because rehype-pretty-code's inline styles otherwise fight Tailwind).

### Loading system

`LoadingProvider` (`src/providers/LoadingProvider.tsx`) is a context wrapping the whole app in the root layout, tracking a `loadingCount` (supports overlapping loads) and exposing `isLoading`/`startLoading`/`stopLoading`/`withLoading`. `useLoading()` (`src/hooks/useLoading.ts`) reads it and throws if used outside the provider. This is for **client-side/manual** loading state (e.g. wrapping an async action with `withLoading`) — distinct from Next's route-level `loading.tsx` (`src/app/loading.tsx` → `Loading` component), which handles route transition suspense automatically. `GlobalLoadingIndicator` renders a top progress bar driven by the context.

### Environment variables — known inconsistency

Two separate, currently-disconnected env conventions exist:
- `env.ts` (repo root, **not** under `src/`) defines a zod schema (`NEXT_PUBLIC_SITE_URL`, `DATABASE_URL`, `NEXTAUTH_SECRET`, `RESEND_API_KEY`, `GOOGLE_ANALYTICS_ID`) and is not currently imported anywhere. Its own usage comment (`import { env } from "@/env"`) won't resolve as-is since the `@/*` path alias maps to `./src/*` and `env.ts` lives at the root — either move it under `src/` or import it via a relative/root-relative path.
- Runtime code (`lib/seo.ts`, `lib/structured-data.ts`, the blog page) instead reads `process.env.NEXT_PUBLIC_BASE_URL` directly (with a hardcoded `https://webscaffold.com` fallback), which isn't in `env.ts`'s schema or `.env.example` (which defines `NEXT_PUBLIC_SITE_URL` instead).

If you touch env-dependent code, be aware these two names (`NEXT_PUBLIC_SITE_URL` vs `NEXT_PUBLIC_BASE_URL`) are not currently the same variable — don't assume validating one covers the other.

### Styling

Tailwind CSS v4 (CSS-first config via `@import "tailwindcss"` in `globals.css`, no `tailwind.config.js`). Design tokens are CSS custom properties in `:root`/`.dark` (oklch colors) mapped into Tailwind's `@theme inline`. Dark mode is class-based (`.dark`). MDX article typography is hand-rolled under `.mdx-content`/`.mdx-pre`/`.mdx-table-wrapper` rather than relying solely on `@tailwindcss/typography`'s `prose` classes (both are used together — see the blog page's `className="prose dark:prose-invert ... mdx-content"`).

### Path aliases

`@/*` → `./src/*` (see `tsconfig.json` and mirrored in `components.json` aliases: `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`).
