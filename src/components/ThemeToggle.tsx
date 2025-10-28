'use client';

import { useTheme } from 'next-themes';

import DarkIcon from '@assignment/icons/DarkIcon';
import LightIcon from '@assignment/icons/LightIcon';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="fixed top-4 right-4 z-50 cursor-pointer rounded-full border border-gray-200 bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/80"
      aria-label="Toggle theme"
    >
      <div className="flex items-center gap-2">
        <LightIcon /> <span className="text-gray-500">/</span> <DarkIcon />
      </div>
    </button>
  );
};

export default ThemeToggle;
