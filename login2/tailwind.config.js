/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      'main-blue': '#205EA9',
      'main-yellow': '#FCBF29',
      'main-white': '#FFFEFF',
      'main-black': '#202A25',
      'main-gray': '#D9D9D9',
      'second-blue': '#618AC9',
      'second-yellow': '#F6B138',
      'second-green': '#31968E',
      'second-red': '#CE433F',
    },
    extend: {},
  },
  plugins: [],
}
