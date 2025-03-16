'use client';

import { useState, useEffect } from "react";
import AnimatedThanthaVibe from "./AnimatedThanthaVibe";
import AnimatedMobileThanthaVibe from "./AnimatedMobileThanthaVibe";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function ResponsiveThanthaVibe() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // During first render, don't render any component
  // This prevents hydration errors
  if (!mounted) {
    return <div className="w-full h-[calc(100vh-2rem)]"></div>;
  }
  
  return isMobile ? <AnimatedMobileThanthaVibe /> : <AnimatedThanthaVibe />;
} 