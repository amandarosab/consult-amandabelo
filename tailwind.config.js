/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Source Serif 4'", 'Georgia', 'serif'],
        sans: ["'Inter'", '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: '#fcfaf5',
        warm: '#f6f3ec',
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#4a4a4a',
          muted: '#8a8a8a',
        },
        accent: '#6b3fa0',
        border: 'rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};