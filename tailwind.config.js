/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3232ac",
        white: "#ffffff",
        orange: "#ffb45f",
        grey: "#f5f5fc",
        black: "#211f46",
        green: "#00b8a9",
        yellow: "#d8a31c",
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1440px",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      News: [" Newsreader", "serif"],
      
    },
  },
  plugins: [],
};
