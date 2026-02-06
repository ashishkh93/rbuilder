import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BREAKPOINTS = {
  xSmall: 434,
  small: 640,
  mobile: 767,
  tablet: 1023,
  desktop: 1279,
  wide: 1535,
} as const;

export const MEDIA_QUERIES = {
  xSmall: `(max-width: ${BREAKPOINTS.xSmall}px)`,
  small: `(max-width: ${BREAKPOINTS.small}px)`,
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop + 1}px)`,
  wide: `(min-width: ${BREAKPOINTS.wide + 1}px)`,
} as const;
