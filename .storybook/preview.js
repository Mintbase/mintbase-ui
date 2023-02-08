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
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#111',
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
