/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: "#0f1433",
          darker: "#1a1f4f",
          light: "#ffffff",
          accent: "#fbbf24",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        mystical: ["Palatino", "serif"],
        elegant: ["Garamond", "serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 1s linear infinite",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
