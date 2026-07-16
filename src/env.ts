import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_SITE_URL: z.url(),

    // Not wired up to any feature yet - optional until DB/auth are implemented.
    DATABASE_URL: z.string().min(1).optional(),
    NEXTAUTH_SECRET: z.string().min(1).optional(),

    // Contact form (src/app/api/contact/route.ts)
    RESEND_API_KEY: z.string().min(1),
    CONTACT_EMAIL_TO: z.email(),
    CONTACT_EMAIL_FROM: z.string().min(1).optional(),

    GOOGLE_ANALYTICS_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);


// usage example:

// import { env } from "@/env";
// const siteUrl = env.NEXT_PUBLIC_SITE_URL;
