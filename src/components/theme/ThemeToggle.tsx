'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { themeConfig, type Theme } from '@/lib/theme-config';

const THEME_ORDER = [...themeConfig.themes] as Theme[];

const THEME_ICON: Record<Theme, React.ReactNode> = {
	light: <Sun className="size-4" />,
	dark: <Moon className="size-4" />,
	system: <Monitor className="size-4" />,
};

interface ThemeToggleProps {
	className?: string;
}

const subscribeNoop = () => () => {};

/** True only once mounted on the client, without a setState-in-effect. */
function useMounted() {
	return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

/**
 * Cycles through `themeConfig.themes` (light -> dark -> system -> ...) on click.
 * Reorder or trim that list in `src/lib/theme-config.ts` to change the cycle.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				size="icon"
				className={className}
				disabled
				aria-hidden
			>
				<span className="size-4" />
			</Button>
		);
	}

	const current = (theme as Theme) ?? themeConfig.defaultTheme;
	const currentIndex = THEME_ORDER.indexOf(current);
	const next = THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length] ?? THEME_ORDER[0];
	const label = `Theme: ${current}. Click to switch to ${next}.`;

	return (
		<Button
			variant="ghost"
			size="icon"
			className={className}
			onClick={() => setTheme(next)}
			title={label}
			aria-label={label}
		>
			{THEME_ICON[current]}
		</Button>
	);
}
