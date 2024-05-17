/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#a18a4d',
        'lightGray': '#999999',
        'darkgray': '#333333',
        'middleGray': '#333333e6',
        'lightTextColor': '#f2f2f2',
        'lighterGray': '#d5d5d5'
      },
      fontFamily: {
        Lato: ["Lato"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "12rem",
          "3xl": "16rem",
          "4xl": "20rem",
        },
        margin: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "12rem",
          "3xl": "16rem",
          "4xl": "20rem",
        },
      },
    },
  },
  plugins: [],
}

