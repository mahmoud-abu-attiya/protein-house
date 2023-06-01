/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#382C44",
      secondary: "#FFD0BF",
      therd: "#593B5B",
      // you can either spread `colors` to apply all the colors
      ...colors,
      // or add them one by one and name whatever you want
      amber: colors.amber,
      emerald: colors.emerald,
    },
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}

