// components/ThemeToggle.tsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust if needed

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  // On mount, check localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className="flex items-center space-x-3 px-4 py-3 text-white/70 hover:text-white rounded-xl justify-start"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
      <span className="font-medium">Toggle Theme</span>
    </Button>
  );
};

export default ThemeToggle;
