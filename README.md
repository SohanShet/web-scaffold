# Web Scaffold

A reusable Next.js starter project built around a simple idea:

Most web projects start with the same foundation — navigation, landing pages, SEO setup, content pages, reusable UI components, and eventually a blog.

After rebuilding these pieces across multiple projects, I started collecting the patterns that appeared repeatedly. Web Scaffold packages those foundations into a structured starting point so developers can spend less time on setup and more time building product-specific features.

The goal is not to generate an entire application. Instead, it provides a clean, extensible foundation that can grow alongside a project.

## Why Web Scaffold?

Many projects launch with only a few pages, but requirements tend to expand over time:

* Blog content
* SEO improvements
* Content management
* Search engine visibility
* Analytics integrations

Adding these later often requires restructuring parts of the codebase.

Web Scaffold includes these foundations from the beginning so they're available when needed, without getting in the way of smaller projects.

## Features

### Content Layer

* Centralized content architecture
* CMS-agnostic structure
* Reusable navigation and footer content
* Easy migration to a CMS later

### Blog Infrastructure

* MDX-powered blogs
* Dynamic routing
* Blog listing pages
* SEO-friendly URLs

### SEO Foundation

* Metadata utilities
* Sitemap generation
* Robots.txt generation
* Structured data helpers

### Shared UI Components

* Navigation
* Footer
* Buttons
* Breadcrumbs
* Carousels
* Accordion (used by the FAQ section)
* Section wrappers

### Pages & Sections

* Marketing and admin route groups, each with their own layout
* Contact page with a validated form (zod) and email delivery via Resend, including a spam honeypot
* Legal pages — Privacy Policy, Terms of Service, Cookie Policy — driven by typed content
* FAQ section with an accordion UI and FAQPage structured data

### Reliability & DX

* Runtime environment variable validation (zod schema in `src/env.ts`)
* Global error boundary and not-found page
* Empty state component for lists/pages with no data
* Global loading system (context/provider + route-level `loading.tsx`) with a top progress indicator

### Project Structure

* Predictable folder organization
* Clear separation of concerns
* Easy contributor onboarding

## Project Structure

```text
app/
├── (marketing)/   # public site: layout, home, about, blog, contact, legal
├── (admin)/       # admin route group (scaffolded, not yet built out)
└── api/           # route handlers (e.g. contact form)
components/        # generic/shared building blocks (ui, seo, feedback)
_components/        # app-specific, content-aware components
_content/           # typed content objects — the CMS-agnostic data layer
lib/
providers/
hooks/
```

The structure prioritizes convention and consistency so developers and AI coding tools can quickly understand how the project is organized.

## Design Principles

### Single Source of Truth for Content

Content is separated from UI components to avoid duplication across the application.

```text
_content/
├── navbar.ts
├── footer.ts
├── faq.ts
├── legal/
├── blogs/
└── types.ts
```

This makes content easier to maintain and simplifies future CMS integrations.

### Reusable Building Blocks

Common UI patterns are included as reusable components so new projects can focus on product-specific functionality rather than rebuilding the same foundations repeatedly.

### Future-Friendly Architecture

Blog and SEO infrastructure are included from the start, even when not immediately required, reducing future migration and refactoring effort.

## Getting Started

```bash
git clone <repository-url>

cd web-scaffold

pnpm install

cp .env.example .env.local
# fill in NEXT_PUBLIC_SITE_URL, RESEND_API_KEY, CONTACT_EMAIL_TO, etc.

pnpm run dev
```

Open http://localhost:3000 to view the application.

## Roadmap

Planned improvements include:

* Backend starter structure
* API abstraction layer
* AI context / skill files
* Analytics integration points
* Additional SEO utilities
* Admin/dashboard shell (route group currently scaffolded but empty)

## Status

Web Scaffold is an active and ongoing project.

The current version focuses on the foundations most commonly reused across web projects, while future updates will continue improving developer experience, content workflows, and AI-assisted development support.

## Contributing

Issues, suggestions, and pull requests are welcome.

If you've encountered a recurring pattern that belongs in a reusable web starter, feel free to open a discussion.
