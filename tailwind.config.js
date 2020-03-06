const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '900': '#454545'
        },
        orange: {
          ...colors.orange,
          '500': '#fc6900'
        },
        yellow: {
          ...colors.yellow,
          '400': '#ffc600'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
