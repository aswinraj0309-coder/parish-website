/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy primary (#1e3a8a)
        navy: {
          50: '#f0f5ff',
          100: '#e0ebfe',
          200: '#c7dcfe',
          300: '#a0c4fd',
          400: '#70a2fb',
          500: '#437cf7',
          600: '#255deb',
          700: '#1d48d8',
          800: '#1e3cb0',
          900: '#1e3a8a', // Deep navy primary
          950: '#112255',
        },
        // Burgundy/crimson accents (#9f1239)
        burgundy: {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#fecdd6',
          300: '#fda4b5',
          400: '#fb718d',
          500: '#f43f65',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239', // Burgundy/crimson accent
          900: '#881337',
          950: '#4c051a',
        },
        // Subtle gold highlights (#d97706)
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706', // Subtle gold highlight
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Light off-white background sections (#f8fafc)
        offwhite: '#f8fafc',
      },
      fontFamily: {
        serif: ['Cinzel', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
