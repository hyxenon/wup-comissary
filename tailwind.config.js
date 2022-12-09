/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lemonMilk: "'lemon/milk', sans-serif",
        alex: "'Alex Brush', cursive;"
      },
      screens:{
        "3xl": "1900px"
      },
      colors:{
        heading1: "#059142",
        lightYellow: "#FFEB3B",
        lightGreen: "#06c258",
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
