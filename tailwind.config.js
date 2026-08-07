/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090E',
          canvas: '#0D0E15',
          surface: '#131520',
          hover: '#1A1D2C',
        },
        reliution: {
          blue: '#0D82F8',
          light: '#38BDF8',
          cyan: '#00F0FF',
          indigo: '#6366F1',
          emerald: '#00E676',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
