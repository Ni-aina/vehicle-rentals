"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Home = ()=> {

  const [isDarkMode, setIsDarkMode] = useState<string>("light");
  const toggleDarkMode = ()=> setIsDarkMode(prevMode => prevMode === "light" ? "dark" : "light");

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
   <div className="flex justify-end h-full p-5">
      <button onClick={toggleDarkMode}>
        {isDarkMode === "light" ? <Sun /> : <Moon />}
      </button>
   </div>
  );
}

export default Home;