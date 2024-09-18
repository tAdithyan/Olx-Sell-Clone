/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA', 
        accent: {
          light: '#FBBF24',
          default: '#F59E0B', 
          dark: '#B45309', // Dark yellow
        },
      },
    },
  },
  plugins: [],
};
