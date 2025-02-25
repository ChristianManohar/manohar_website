import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geist_mono: ["var(--font-geist_mono)", ...fontFamily.mono]
      }
    },
  },
  plugins: [],
} satisfies Config;
