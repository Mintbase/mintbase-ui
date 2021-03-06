const mintbaseTheme = require('./src/mintbase-theme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  theme: mintbaseTheme,
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.no-scrollbar::-webkit-scrollbar ': {
          display: 'none',
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        '.no-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
      })
    }),
  ],
}
