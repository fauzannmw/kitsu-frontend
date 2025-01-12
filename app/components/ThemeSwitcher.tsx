"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-blue-600" size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
