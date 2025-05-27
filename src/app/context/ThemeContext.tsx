"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Update theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Initialize theme
  useEffect(() => {
    // const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
    //   .matches
    //   ? "dark"
    //   : "light";
    // const initialTheme = savedTheme || systemTheme;

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || "dark"; //default to dark theme

    setThemeState(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
