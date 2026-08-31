import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f7fb",
          100: "#cceff7",
          200: "#99dfef",
          300: "#66cfe7",
          400: "#33bfdf",
          500: "#00afd7",
          600: "#008cab",
          700: "#006980",
          800: "#004656",
          900: "#00232b",
        },
        turquoise: {
          DEFAULT: "#40E0D0",
          dark: "#2bb8aa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
