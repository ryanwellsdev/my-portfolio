import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode support via a class
  theme: {
    extend: {
      colors: {
        black: "#1e2930", // Medium dark gray, your default black tone
        white: "#f3ebd9", // Default white tone
        accent1: "#cf9419", // Accent colors
        accent2: "#8f3524",
        accent3: "#627980",
        "hover-accent1": "#cf9419", // Hover state colors
        "hover-accent2": "#8f3524",
        "hover-accent3": "#627980",
      },
      backgroundColor: {
        accent1: "#cf9419", // Background colors
        accent2: "#8f3524",
        accent3: "#627980",
        "hover-accent1": "#cf9419", // Hover background colors
        "hover-accent2": "#8f3524",
        "hover-accent3": "#627980",
      },
      textColor: {
        accent1: "#cf9419", // Text colors
        accent2: "#8f3524",
        accent3: "#627980",
      },
      borderColor: {
        black: "#1e2930", // Border color
      },
    },
  },
  plugins: [],
};

export default config;
