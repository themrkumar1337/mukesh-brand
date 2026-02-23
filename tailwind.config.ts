// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020203", // Deep Obsidian
        brand: {
          DEFAULT: "#D4AF37", // Metallic Gold
          light: "#F5D76E",
          dark: "#996515",
        },
      },
    },
  },
  plugins: [],
};