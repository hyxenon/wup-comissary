/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lemonMilk: "'Lemon/Milk', sans-serif",
        alex: "'Alex Brush', cursive;"
      },
      colors:{
        heading1: "#059142",
      }
    },
  },
  plugins: [],
}
