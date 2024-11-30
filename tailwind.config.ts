import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-lg": "url('/assets/home/desktop/image-hero.jpg')",
        "hero-bg-sm": "url('/assets/home/mobile/image-header.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
