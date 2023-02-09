import '../src/styles.css'
import { themes } from '@storybook/theming';


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Core', 'Components'],
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Light',
        class: [],
        color: '#ffffff',
        default: true,
      },
      {
        name: 'Dark',
        class: ['dark'],
        color: '#000000',
      },
    ],
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light },
    darkClass: 'dark',
    current: 'dark',
    stylePreview: true
  }
}
