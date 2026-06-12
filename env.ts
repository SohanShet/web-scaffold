import { z } from "zod";

const envSchema = z.object({
    NEXT_PUBLIC_SITE_URL: z.string().url(),

    DATABASE_URL: z.string().min(1),

    NEXTAUTH_SECRET: z.string().min(1),

    RESEND_API_KEY: z.string().min(1),

    GOOGLE_ANALYTICS_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);


// usage example:

// import { env } from "@/env";
// const siteUrl = env.NEXT_PUBLIC_SITE_URL;