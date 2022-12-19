/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lemonMilk: "'Roboto', sans-serif",
        alex: "'Alex Brush', cursive;"
      },
      screens:{
        "3xl": "1900px"
      },
      colors:{
        heading1: "#059142",
        lightYellow: "#FFEB3B",
        lightGreen: "#06c258",
        lightButton: "#50F698",
        orange1: "#FDCD14",
        darkBlue: "#0640B4"
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
