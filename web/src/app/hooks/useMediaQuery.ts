'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Default to false to avoid hydration mismatch (will update after mount)
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Run on client-side only
    const media = window.matchMedia(query);
    // Update matches state with current value
    setMatches(media.matches);
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query]); // Only re-run if query changes
  
  return matches;
} 