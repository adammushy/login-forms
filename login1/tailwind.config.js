const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
      sky: colors.sky,
      cyan: colors.cyan,
    },
  },
  },
  plugins: [],
}