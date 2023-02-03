/* eslint-disable @typescript-eslint/no-var-requires */
const mintbaseTheme = require('./src/mintbase-theme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  theme: mintbaseTheme,
  variants: {
    extend: {},
  },
  safelist: ['bg-mb-red','text-white', 'dark',
  {
    pattern: /dark:(blue)-(300-35|100|100-35|100-15)/,
  },
  {
    pattern: /dark:bg-(gray)-(50|100|150|200|300|400|500|600|700|800|850|900)/,
  },
  {
    pattern: /text-(gray)-(50|100|150|200|300|400|500|600|700|800|850|900)/,
  },
  {
    pattern: /text-(blue)-(300-35|100|100-35|100-15)/,
  },
  {
    pattern: /bg-(gray)-(50|100|150|200|300|400|500|600|700|800|850|900)/,
  },
  {
    pattern: /bg-(mb-red)-(35|15)/,
  },
  {
    pattern: /bg-(blue)-(300-35|100|100-35|100-15)/,
  },
  {
    pattern: /bg-(success|warning|error)-(300|100)/,
  }
],
  content: ['./src/**/*.tsx'],
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
