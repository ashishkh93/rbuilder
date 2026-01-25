import { useEffect } from "react";
import { builderConfig } from "../builder.config";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const colors = builderConfig.theme.colors;

    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-primary-fg", colors.primaryFg);
    root.style.setProperty("--color-secondary", colors.secondary);
    root.style.setProperty("--color-secondary-fg", colors.secondaryFg);
    root.style.setProperty("--color-background", colors.background);
    root.style.setProperty("--color-surface", colors.surface);
    root.style.setProperty("--color-text", colors.text);
    root.style.setProperty("--color-muted", colors.muted);
    root.style.setProperty("--color-border", colors.border);

    // Typography
    const typography = builderConfig.theme.typography;
    root.style.setProperty("--font-sans", typography.fontSans);
    root.style.setProperty("--font-heading", typography.fontHeading);
    root.style.setProperty("--base-font-size", `${typography.baseFontSize}px`);
  }, []);

  return <>{children}</>;
}
