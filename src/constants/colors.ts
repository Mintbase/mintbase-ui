import { TColorDetail } from '../types/colors.type';

export const backgroundColorMap: { [key: string]: { bg: string, hex: string } } = {
  'mb-blackblue': { bg: 'bg-mb-blackblue', hex: '#070C2B' },
  'mb-red': { bg: 'bg-mb-red', hex: '#FF2424' },
  'mb-red-15': { bg: 'bg-mb-red-15', hex: '#FFDEDE' },
  'mb-red-35': { bg: 'bg-mb-red-35', hex: '#3A1C2A' },
  'gray-900': { bg: 'bg-gray-900', hex: '#101223' },
  'gray-850': { bg: 'bg-gray-850', hex: '#1E2030' },
  'gray-800': { bg: 'bg-gray-800', hex: '#282A3A' },
  'gray-700': { bg: 'bg-gray-700', hex: '#404252' },
  'gray-600': { bg: 'bg-gray-600', hex: '#5B5D6B' },
  'gray-500': { bg: 'bg-gray-500', hex: '#777986' },
  'gray-400': { bg: 'bg-gray-400', hex: '#9496A1' },
  'gray-300': { bg: 'bg-gray-300', hex: '#B3B5BD' },
  'gray-200': { bg: 'bg-gray-200', hex: '#D2D4DA' },
  'gray-150': { bg: 'bg-gray-150', hex: '#E8EAF0' },
  'gray-100': { bg: 'bg-gray-100', hex: '#F3F4F8' },
  'gray-50': { bg: 'bg-gray-50', hex: '#F9F9F9' },
  'blue-300': { bg: 'bg-blue-300', hex: '#4F58A3' },
  'blue-300-35': { bg: 'bg-blue-300-35', hex: '' },
  'blue-300-15': { bg: 'bg-blue-300-15', hex: '#EBEDFB' },
  'blue-100': { bg: 'bg-blue-100', hex: '#C5D0FF' },
  'blue-100-35': { bg: 'bg-blue-100-35', hex: '#3F4254' },
  'blue-100-15': { bg: 'bg-blue-100-15', hex: '#2B2E42' },
  'success-300': { bg: 'bg-success-300', hex: '#0A7D6C' },
  'success-100': { bg: 'bg-success-100', hex: '#9FED8F' },
  'warning-300': { bg: 'bg-warning-300', hex: '#F2D413' },
  'warning-100': { bg: 'bg-warning-100', hex: '#FFE855' },
  'error-300': { bg: 'bg-error-300', hex: '#C74C4C' },
  'error-100': { bg: 'bg-error-100', hex: '#ED5A5A' },
  black: { bg: 'bg-black', hex: '#FFFFFF' },
  white: { bg: 'bg-white', hex: '#000000' },
};

export const colorsArray: TColorDetail[] = [
  {
    sectionTitle: 'Brand',
    colors: [
      {
        class: 'mb-blackblue',
        hex: backgroundColorMap['mb-blackblue'].hex,
      },
      {
        class: 'mb-red',
        hex: backgroundColorMap['mb-red'].hex,
      },
      {
        class: 'mb-red-35',
        hex: backgroundColorMap['mb-red-35'].hex,
      },
      {
        class: 'mb-red-15',
        hex: backgroundColorMap['mb-red-15'].hex,
      },
    ],
  },
  {
    sectionTitle: 'Neutral',
    colors: [
      {
        class: 'gray-900',
        hex: backgroundColorMap['gray-900'].hex,
      },
      {
        class: 'gray-850',
        hex: backgroundColorMap['gray-850'].hex,
      },
      {
        class: 'gray-800',
        hex: backgroundColorMap['gray-800'].hex,
      },
      {
        class: 'gray-700',
        hex: backgroundColorMap['gray-700'].hex,
      },
      {
        class: 'gray-600',
        hex: backgroundColorMap['gray-600'].hex,
      },
      {
        class: 'gray-500',
        hex: backgroundColorMap['gray-500'].hex,
      },
      {
        class: 'gray-400',
        hex: backgroundColorMap['gray-400'].hex,
      },
      {
        class: 'gray-300',
        hex: backgroundColorMap['gray-300'].hex,
      },
      {
        class: 'gray-200',
        hex: backgroundColorMap['gray-200'].hex,
      },
      {
        class: 'gray-150',
        hex: backgroundColorMap['gray-150'].hex,
      },
      {
        class: 'gray-100',
        hex: backgroundColorMap['gray-100'].hex,
      },
      {
        class: 'gray-50',
        hex: backgroundColorMap['gray-50'].hex,
      },
    ],
  },
  {
    sectionTitle: 'Actions',
    colors: [
      {
        class: 'blue-300',
        hex: backgroundColorMap['blue-300'].hex,
      },
      {
        class: 'blue-300-35',
        hex: backgroundColorMap['blue-300-35'].hex,
      },
      {
        class: 'blue-300-15',
        hex: backgroundColorMap['blue-300-15'].hex,
      },
      {
        class: 'blue-100',
        hex: backgroundColorMap['blue-100'].hex,
      },
      {
        class: 'blue-100-35',
        hex: backgroundColorMap['blue-100-35'].hex,
      },
      {
        class: 'blue-100-15',
        hex: backgroundColorMap['blue-100-15'].hex,
      },
    ],
  },
  {
    sectionTitle: 'State',
    colors: [
      {
        class: 'success-300',
        hex: backgroundColorMap['success-300'].hex,
      },
      {
        class: 'success-100',
        hex: backgroundColorMap['success-100'].hex,
      },
      {
        class: 'warning-300',
        hex: backgroundColorMap['warning-300'].hex,
      },
      {
        class: 'warning-100',
        hex: backgroundColorMap['warning-100'].hex,
      },
      {
        class: 'error-300',
        hex: backgroundColorMap['error-300'].hex,
      },
      {
        class: 'error-100',
        hex: backgroundColorMap['error-100'].hex,
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
];
