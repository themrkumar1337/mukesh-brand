// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#020203", // Deep Obsidian
        brand: {
          DEFAULT: "#D4AF37", // Metallic Gold
          muted: "#1A1608",   // Gold-tinted dark grey
        },
        slate: {
          950: "#08080A",
        }
      },
      backgroundImage: {
        'grid-pattern': "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }
    },
  },
  plugins: [],
};
export default config;