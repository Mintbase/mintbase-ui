const mintbaseTheme = require('./src/mintbase-theme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  theme: mintbaseTheme,
  variants: {
    extend: {},
  },
  content: ['./src/**/*.tsx'],
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.tsx'],
  //   defaultExtractor: (content) => {
  //     // this can help identify possible matches being stripped. 
  //     // inspired by https://stackoverflow.com/a/65583198/296073
  //     return content.match(/[\w-/:]+(?<!:)/g) || []
  //   },
  //   options: {
  //     // we may need to populate this as we notice any visual regressions
  //     // in particular, responsive elements tend to get dropped.
  //     // see also: https://v2.tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //     safelist: []
  //   }
  // },
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
