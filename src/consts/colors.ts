import { TColorDetail } from '../types/colors.type'
import tailwindConfig from '../mintbase-theme'

export const colorsArray: TColorDetail[] = [
  {
    sectionTitle: 'Brand',
    colors: [
      {
        class: 'mb-blackblue',
        hex: tailwindConfig.extend.colors['mb-blackblue'],
      },
      {
        class: 'mb-red',
        hex: tailwindConfig.extend.colors['mb-red'],
      },
      {
        class: 'mb-red-35',
        hex: tailwindConfig.extend.colors['mb-red-35'],
      },
      {
        class: 'mb-red-15',
        hex: tailwindConfig.extend.colors['mb-red-15'],
      },
    ],
  },
  {
    sectionTitle: 'Neutral',
    colors: [
      {
        class: 'gray-900',
        hex: tailwindConfig.extend.colors.gray[900],
      },
      {
        class: 'gray-850',
        hex: tailwindConfig.extend.colors.gray[850],
      },
      {
        class: 'gray-800',
        hex: tailwindConfig.extend.colors.gray[800],
      },
      {
        class: 'gray-700',
        hex: tailwindConfig.extend.colors.gray[700],
      },
      {
        class: 'gray-600',
        hex: tailwindConfig.extend.colors.gray[600],
      },
      {
        class: 'gray-500',
        hex: tailwindConfig.extend.colors.gray[500],
      },
      {
        class: 'gray-400',
        hex: tailwindConfig.extend.colors.gray[400],
      },
      {
        class: 'gray-300',
        hex: tailwindConfig.extend.colors.gray[300],
      },
      {
        class: 'gray-200',
        hex: tailwindConfig.extend.colors.gray[200],
      },
      {
        class: 'gray-150',
        hex: tailwindConfig.extend.colors.gray[150],
      },
      {
        class: 'gray-100',
        hex: tailwindConfig.extend.colors.gray[100],
      },
      {
        class: 'gray-50',
        hex: tailwindConfig.extend.colors.gray[50],
      },
    ],
  },
  {
    sectionTitle: 'Actions',
    colors: [
      {
        class: 'blue-300',
        hex: tailwindConfig.extend.colors['blue-300'],
      },
      {
        class: 'blue-300-35',
        hex: tailwindConfig.extend.colors.blue[300][35],
      },
      {
        class: 'blue-300-15',
        hex: tailwindConfig.extend.colors.blue[300][15],
      },
      {
        class: 'blue-100',
        hex: tailwindConfig.extend.colors['blue-100'],
      },
      {
        class: 'blue-100-35',
        hex: tailwindConfig.extend.colors.blue[100][35],
      },
      {
        class: 'blue-100-15',
        hex: tailwindConfig.extend.colors.blue[100][15],
      },
    ],
  },
  {
    sectionTitle: 'Additional',
    colors: [
      {
        class: 'purple-300',
        hex: tailwindConfig.extend.colors.purple[300],
      },
      {
        class: 'purple-100',
        hex: tailwindConfig.extend.colors.purple[100],
      },
      {
        class: 'orange-300',
        hex: tailwindConfig.extend.colors.orange[300],
      },
      {
        class: 'orange-100',
        hex: tailwindConfig.extend.colors.orange[100],
      },
    ],
  },
  {
    sectionTitle: 'State',
    colors: [
      {
        class: 'success-300',
        hex: tailwindConfig.extend.colors.success[300],
      },
      {
        class: 'success-100',
        hex: tailwindConfig.extend.colors.success[100],
      },
      {
        class: 'warning-300',
        hex: tailwindConfig.extend.colors.warning[300],
      },
      {
        class: 'warning-100',
        hex: tailwindConfig.extend.colors.warning[100],
      },
      {
        class: 'error-300',
        hex: tailwindConfig.extend.colors.error[300],
      },
      {
        class: 'error-100',
        hex: tailwindConfig.extend.colors.error[100],
      },
    ],
  },
  {
    sectionTitle: 'Shades',
    colors: [
      {
        class: 'black',
        hex: '#000000',
      },
      {
        class: 'white',
        hex: '#FFFFFF',
      },
    ],
  },
]
