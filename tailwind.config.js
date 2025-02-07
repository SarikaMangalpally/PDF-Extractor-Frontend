/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all JavaScript and TypeScript files in the components directory
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

