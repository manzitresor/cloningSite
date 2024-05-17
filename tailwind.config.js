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
    },
  },
  plugins: [],
}

