const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        teal: colors.teal,
        sky: colors.sky,
        slate: colors.slate,
        lime: colors.lime,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
