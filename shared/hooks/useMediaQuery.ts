const media = {
  md: "(max-width: 768px)",
  lg: "(max-width: 1024px)",
  xl: "(max-width: 1280px)",
};

import { useState, useEffect } from "react";

/**
 * Hook for matching media queries in React
 * @param query e.g. "(min-width: 768px)"
 */
export const useMediaQuery = (size: keyof typeof media): boolean => {
  const query = media[size];
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Avoid running on the server (Next.js SSR)
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);

    // Initial check
    updateMatch();

    // Listen for changes
    mediaQueryList.addEventListener("change", updateMatch);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
};
