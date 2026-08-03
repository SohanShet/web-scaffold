/**
 * ============================================================================
 * TEMPLATE SHOWCASE — delete me when you start a real project
 * ============================================================================
 * This section exists only to introduce "Web Scaffold" on its own demo
 * homepage. It is intentionally self-contained (content + component in one
 * file, no shared types) so removing it takes two steps:
 *
 *   1. Delete this file.
 *   2. In src/app/(marketing)/page.tsx, remove the ScaffoldShowcase import
 *      and its <ScaffoldShowcase /> usage.
 *
 * Nothing else in the codebase imports from here.
 * ============================================================================
 */
import {
    FolderTree,
    FileText,
    Search,
    Moon,
    Palette,
    Loader,
    type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "./Section";

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: FolderTree,
        title: "Content-first architecture",
        description:
            "Copy and data live in typed src/_content objects, decoupled from UI — swap in a real CMS later without touching components.",
    },
    {
        icon: FileText,
        title: "MDX blog, no database",
        description:
            "Drop a .mdx file with frontmatter into src/_content/blogs and it's live — reads, derived fields, and slugs are handled for you.",
    },
    {
        icon: Search,
        title: "SEO baked in",
        description:
            "Default metadata, JSON-LD structured data, sitemap and robots are generated from your content, not hand-maintained.",
    },
    {
        icon: Moon,
        title: "Dark mode, one config knob",
        description:
            "Theming runs through next-themes and a single lib/theme-config.ts file — retheme a downstream project without touching components.",
    },
    {
        icon: Palette,
        title: "shadcn/ui + Tailwind v4",
        description:
            "Generic primitives in src/components/ui, app-specific composed components in src/_components — extend either without fighting the other.",
    },
    {
        icon: Loader,
        title: "Loading states, handled",
        description:
            "Route-level Suspense loading.tsx plus a LoadingProvider for manual async actions — both wired up and ready to use.",
    },
];

export function ScaffoldShowcase() {
    return (
        <Section id="showcase" className="pt-20 md:pt-24">
            <div className="flex flex-col items-center gap-6 text-center">
                <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                    Open-source Next.js scaffold
                </span>

                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Ship your next idea, not your boilerplate
                </h1>

                <p className="max-w-xl text-lg text-muted-foreground">
                    Web Scaffold pre-bakes the foundations every project
                    rebuilds from scratch — content, blog, SEO, theming, and
                    loading states — so you can start on the product instead
                    of the setup.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <Button asChild>
                        <Link href="/about">Read the philosophy</Link>
                    </Button>

                    <Button asChild variant="outline">
                        <Link href="/blog">See it in action</Link>
                    </Button>
                </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map(({ icon: Icon, title, description }) => (
                    <Card key={title}>
                        <CardContent className="flex flex-col gap-3">
                            <Icon className="size-5 text-primary" />
                            <p className="font-semibold text-foreground">
                                {title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
