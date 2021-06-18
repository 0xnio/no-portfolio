const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        mono: ['Fira Code', ...fontFamily.mono],
      },
    },
  },
}
