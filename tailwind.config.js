/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3232ac',
        white: '#f9f9fc',
        orange: '#ffb45f',
        grey: '#f5f5fc',
        black: '#211f46'
    }
},
 fontFamily: {
  'Roboto': ['Roboto', 'sans-serif'],
  'News': [' Newsreader', 'serif'],
 },
},
  plugins: [],
  };