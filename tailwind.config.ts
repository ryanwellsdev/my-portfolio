import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        midnightflame: ["MidnightFlameGothic", "sans-serif"],
        texgyreheros: ["TexGyreHeros", "sans-serif"], // Default font
      },
      colors: {
        black: "#193741",
        white: "#90c5a7",
        accent1: "#3e5e63",
        accent2: "#588184",
        accent3: "#7ea996",
        "hover-accent1": "#3e5e63",
        "hover-accent2": "#588184",
        "hover-accent3": "#7ea996",
      },
      backgroundColor: {
        accent1: "#3e5e63",
        accent2: "#588184",
        accent3: "#7ea996",
        "hover-accent1": "#3e5e63",
        "hover-accent2": "#588184",
        "hover-accent3": "#7ea996",
      },
      textColor: {
        accent1: "#3e5e63",
        accent2: "#588184",
        accent3: "#7ea996",
      },
      borderColor: {
        black: "#193741",
      },
    },
  },
  plugins: [],
};

export default config;
