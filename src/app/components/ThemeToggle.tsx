"use client";

import { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [accentColor, setAccentColor] = useState("#FFFF33");

  const neonHighlighterColors = [
    { name: "Neon Yellow", color: "#FFFF33" },
    { name: "Neon Pink", color: "#FF33CC" },
    { name: "Neon Green", color: "#39FF14" },
    { name: "Neon Blue", color: "#33FFFF" },
    { name: "Neon Orange", color: "#FF5F1F" },
  ];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className="p-2 bg-accent text-white rounded-full"
        style={{ backgroundColor: accentColor }}
      >
        Toggle Theme
      </button>
      <div className="flex space-x-2">
        {neonHighlighterColors.map((colorOption) => (
          <button
            key={colorOption.color}
            onClick={() => setAccentColor(colorOption.color)}
            style={{ backgroundColor: colorOption.color }}
            className={`w-8 h-8 rounded-full border-2 ${
              accentColor === colorOption.color
                ? "border-black dark:border-white"
                : "border-transparent"
            }`}
            title={colorOption.name}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
