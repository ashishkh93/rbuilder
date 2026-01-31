import { useCallback, useEffect, useMemo, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const getMatch = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  }, [query]);

  const [matches, setMatches] = useState<boolean>(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handler);

    // Sync immediately (important for hydration correctness)
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener("change", handler);
  }, [query]);

  return useMemo(() => matches, [matches]);
};
