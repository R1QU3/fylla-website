/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    minHeight: {
      'medium': '520px', 
    },
    fontFamily: {
      'roboto': 'Roboto Mono',
    },
    colors: {
      'skin-color': '#F5F5F5',
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
}