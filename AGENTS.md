# AGENTS.md

This file orients any AI coding agent (Claude Code, Cursor, Codex, Windsurf, Copilot, etc.) working in a project that was bootstrapped from **Web Scaffold**. If you're reading this in a downstream project, the specifics below (routes, content files) may have grown beyond what's listed — treat this as "how this codebase thinks," not a literal file inventory.

## What this project is

Web Scaffold is a Next.js (App Router) template that pre-bakes the parts every marketing site/blog rebuilds from scratch: typed content, MDX blog infra, SEO/structured data, a shared UI layer, and a global loading system. The intent behind every pattern here is **reusability and easy deletion** — prefer extending the existing generic pieces over adding one-off, page-specific logic. If you add something only one page will ever use, it probably doesn't belong in `_content/` or `components/`.

Stack: Next.js App Router + TypeScript, Tailwind CSS v4 (CSS-first, no `tailwind.config.js`), shadcn/ui (new-york style, Radix underneath), MDX via `next-mdx-remote/rsc`, zod for validation, Resend for transactional email. Package manager is **pnpm** — don't introduce npm/yarn lockfiles.

## The one rule that explains most of the folder structure

**Content and copy never live inside components.** Every piece of user-facing text/data is a typed object in `src/_content/`, and components receive it as a prop. This is what makes the scaffold swappable for a real CMS later without touching JSX. Before hardcoding a string into a component, check whether it should be a `_content/` object instead.

## Directory map

```
src/
  app/
    (marketing)/     # public site — has its own layout.tsx which IS the root layout
    (admin)/         # scaffolded route group, currently empty — build dashboards here
    api/             # route handlers (e.g. contact form)
    global-error.tsx, not-found.tsx, loading.tsx, robots.ts, sitemap.ts, globals.css
                      # these MUST stay at src/app/ root — they apply regardless of route group
  _content/          # typed content objects: navbar.ts, footer.ts, faq.ts, legal/*.ts, blogs/*.mdx
  _components/        # app-specific components that consume _content/ typed objects as props
  components/
    ui/               # shadcn primitives — add more via `pnpm dlx shadcn@latest add <name>`, don't hand-roll
    seo/              # JsonLd.tsx, MdxContent.tsx (MDX element overrides)
    feedback/         # EmptyState.tsx, GlobalLoadingIndicator.tsx
  lib/                # seo.ts (defaultSEO), structured-data.ts (JSON-LD builders), utils.ts
  providers/          # LoadingProvider (client-side loadingCount context)
  hooks/               # useLoading()
  env.ts               # zod-validated process.env — import as `import { env } from "@/env"`
```

Path alias: `@/*` → `./src/*`.

### There is no `src/app/layout.tsx`

The actual root layout — `<html>`/`<body>`, `LoadingProvider`, `Navbar`/`Footer`, `metadata = defaultSEO` — lives at `src/app/(marketing)/layout.tsx`. A new top-level section with different chrome (e.g. a dashboard) needs its **own** route group with its **own** `layout.tsx`; don't assume the marketing layout applies everywhere.

## Conventions for common changes

**Adding a blog post** — drop a `.mdx` file in `src/_content/blogs/` with frontmatter (`title`, `excerpt`, `publishedAt`, `author: { name, role, avatar }`, `category`, `tags`, `image`, `readTime`, `featured`). No code change needed — `src/_content/blogs/index.ts` reads the directory at request time via `fs`/`gray-matter` and is memoized with React's `cache()`.

**Adding a marketing page** — create `src/app/(marketing)/<route>/page.tsx` as a thin wrapper: import content from `_content/`, export `metadata`, render a component. See `src/app/(marketing)/legal/privacy-policy/page.tsx` for the minimal shape. Then:
- Add the route to the static `routes` array in `src/app/sitemap.ts` — it is **hand-maintained**, not auto-derived from the filesystem.
- Add a nav/footer link in `src/_content/navbar.ts` / `footer.ts` only if it should be globally reachable.

**Adding a new content-backed section** (like the FAQ section) — define the shape in `src/_content/types.ts`, add the data file in `src/_content/`, build a presentational component in `src/_components/` that takes `content` as a prop, and if it's SEO-relevant, add a builder to `src/lib/structured-data.ts` and render it via `<JsonLd data={...} />`.

**Adding a UI primitive** — check `src/components/ui/` and `components.json` first; use `pnpm dlx shadcn@latest add <component>` rather than writing a new primitive by hand.

## Known sharp edge: two env var names for the site URL

`src/env.ts` validates `NEXT_PUBLIC_SITE_URL` (used by `robots.ts`). But `lib/seo.ts`, `lib/structured-data.ts`, `sitemap.ts`, and the blog detail page instead read `process.env.NEXT_PUBLIC_BASE_URL` directly with a hardcoded fallback (`https://webscaffold.com`). These are **not the same variable**. If you're touching SEO/canonical URLs, check which one the file you're editing actually reads — setting one does not set the other.

## Commands

```bash
pnpm install
pnpm dev      # next dev
pnpm build    # next build
pnpm lint     # eslint
```

No test runner is configured. There's a copy of `.env.example` at the repo root — copy it to `.env.local` and fill in real values (`RESEND_API_KEY`/`CONTACT_EMAIL_TO` are required for the contact form to send).

## For Claude Code specifically

See `CLAUDE.md` for a deeper architectural walkthrough (SEO stack details, the loading system's client/server split, styling internals). This file is the cross-tool quick reference; `CLAUDE.md` is the long-form version.
