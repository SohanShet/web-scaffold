/**
 * Central place to customize dark mode behavior for this project.
 * Change these values to change how theming behaves app-wide -
 * nothing else needs to be touched.
 */
export const themeConfig = {
	/** Theme applied on first visit, before the user (or their OS) picks one. */
	defaultTheme: "system" as "light" | "dark" | "system",
	/** Follow the OS light/dark preference when no explicit choice is stored. */
	enableSystem: true,
	/** localStorage key the chosen theme is persisted under. */
	storageKey: "theme",
	/** Selectable themes, in the order they cycle/appear in the UI. */
	themes: ["light", "dark", "system"] as const,
};

export type Theme = (typeof themeConfig.themes)[number];
