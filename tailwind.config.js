const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      grey: '#B2B2B2',
      secondary: "#66CCFF",
      primary: "#6699FF",
      accent:"#66FFFF",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}