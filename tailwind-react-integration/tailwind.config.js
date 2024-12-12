/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and TS files in the src directory
    "./public/index.html" // Include the main HTML file
  ],
  darkMode: 'media', // Enable dark mode based on user's system preference
  variants: {
    extend: {}, // Extend variants for utilities
  },
  theme: {
    extend: {},
  },
  plugins: [],
}