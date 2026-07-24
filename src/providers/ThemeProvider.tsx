'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { themeConfig } from '@/lib/theme-config';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme={themeConfig.defaultTheme}
			enableSystem={themeConfig.enableSystem}
			storageKey={themeConfig.storageKey}
			themes={[...themeConfig.themes]}
			disableTransitionOnChange
		>
			{children}
		</NextThemesProvider>
	);
}
