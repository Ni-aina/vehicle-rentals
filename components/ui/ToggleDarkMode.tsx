"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ToggleDarkMode = ()=> {
  const [darkMode, setDarkMode] = useState<String>();
  const toggleDarkMode = ()=> setDarkMode(prevMode => prevMode === "light" ? "dark" : "light");

  useEffect(()=> {
    const mediaQueries = window.matchMedia("(prefers-color-scheme: dark)");
    localStorage.setItem("isDarkMode", mediaQueries.matches ? "dark" : "light");
  }, []);

  useEffect(() => { 
    const savedMode = typeof window ? localStorage.getItem("isDarkMode") : "light";
    setDarkMode(savedMode || "light");
  }, []);

  useEffect(()=> {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode + "");
  }, [darkMode])

  return (
    <button onClick={toggleDarkMode}>
        {darkMode === "light" ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}