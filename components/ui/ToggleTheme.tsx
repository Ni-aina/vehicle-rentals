"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ToggleTheme = ()=> {
  const [theme, setTheme] = useState<string>();
  const toggleTheme = ()=> setTheme(prevMode => prevMode === "light" ? "dark" : "light");

  useEffect(()=> {
    if (localStorage.getItem("theme")) return;
    const mediaQueries = window.matchMedia("(prefers-color-scheme: dark)");
    localStorage.setItem("theme", mediaQueries.matches ? "dark" : "light");
  }, []);

  useEffect(() => { 
    const savedMode = typeof window ? localStorage.getItem("theme") : "light";
    setTheme(savedMode || "light");
  }, []);

  useEffect(()=> {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    if (typeof theme !== "string") return;
    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <button onClick={toggleTheme}>
        {theme === "light" ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}