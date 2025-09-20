'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
 const { theme, setTheme, resolvedTheme } = useTheme();
 const [isDarkMode, setIsDarkMode] = useState(false);
 const [mounted, setMounted] = useState(false);

 // Prevent hydration issues
 useEffect(() => {
  setMounted(true);
 }, []);

 // Sync with theme changes
 useEffect(() => {
  if (mounted) {
   const current = (theme === 'system' ? resolvedTheme : theme) === 'dark';
   setIsDarkMode(current as boolean);
  }
 }, [theme, resolvedTheme, mounted]);

 const toggleTheme = () => {
  const next = !isDarkMode;
  setIsDarkMode(next);
  setTheme(next ? 'dark' : 'light');
 };

 if (!mounted) return null;

 return (
  <button
   onClick={toggleTheme}
   className="p-2 xl:border border-s-0 rounded-br-md"
   aria-label="Toggle theme"
  >
   <Image
    src={isDarkMode ? "/light-mode.svg" : "/nightmode.svg"}
    alt={isDarkMode ? "Light mode" : "Dark mode"}
    width={24}
    height={24}
    className={`${isDarkMode ? 'w-6 h-6 invert' : 'w-6 h-6'}`}
   />
  </button>
 );
}