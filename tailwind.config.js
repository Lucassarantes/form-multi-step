const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#464547',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: '#F9423A',
      purple: colors.purple,
      green: colors.green,
    },
    backgroundColor: (theme) => ({

      ...theme('colors'),
      primary: '#F9423A',
      secondary: '#ffed4a',
      danger: '#e3342f',
      orange: '#F9423A',
      blue: '#009BBF',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
