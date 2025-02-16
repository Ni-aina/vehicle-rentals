"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ToggleDarkMode = ()=> {

  const [isDarkMode, setIsDarkMode] = useState("light");
  
  const toggleDarkMode = ()=> setIsDarkMode(prevMode => prevMode === "light" ? "dark" : "light");

  useEffect(() => {
    const savedMode = typeof window ? localStorage.getItem("isDarkMode") : "light";
    setIsDarkMode(savedMode || "light");
  }, []);

  useEffect(()=> {
    if (isDarkMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode])

  return (
    <button onClick={toggleDarkMode}>
        {isDarkMode === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}