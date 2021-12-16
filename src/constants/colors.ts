import { TColorDetail } from "../types/colors.type";
import tailwindConfig from "./../../tailwind.config";

export const backgroundColorMap: { [key: string]: string }  = {
  'mb-blackblue': 'bg-mb-blackblue',
  'mb-red': 'bg-mb-red',
  'mb-red-15': 'bg-mb-red-15',
  'mb-red-35': 'bg-mb-red-35',
  'gray-900': 'bg-gray-900',
  'gray-850': 'bg-gray-850',
  'gray-800': 'bg-gray-800',
  'gray-700': 'bg-gray-700',
  'gray-600': 'bg-gray-600',
  'gray-500': 'bg-gray-500',
  'gray-400': 'bg-gray-400',
  'gray-300': 'bg-gray-300',
  'gray-200': 'bg-gray-200',
  'gray-150': 'bg-gray-150',
  'gray-100': 'bg-gray-100',
  'gray-50': 'bg-gray-50',
  'blue-300': 'bg-blue-300',
  'blue-300-35': 'bg-blue-300-35',
  'blue-300-15': 'bg-blue-300-15',
  'blue-100': 'bg-blue-100',
  'blue-100-35': 'bg-blue-100-35',
  'blue-100-15': 'bg-blue-100-15',
  'success-300': 'bg-success-300',
  'success-100': 'bg-success-100',
  'warning-300': 'bg-warning-300',
  'warning-100': 'bg-warning-100',
  'error-300': 'bg-error-300',
  'error-100': 'bg-error-100',
  'black': 'bg-black',
  'white': 'bg-white',
}

export const colorsArray: TColorDetail[] = [
  {
    sectionTitle: "Brand",
    colors: [
      {
        class: "mb-blackblue",
        hex: tailwindConfig.theme.extend.colors["mb-blackblue"],
      },
      {
        class: "mb-red",
        hex: tailwindConfig.theme.extend.colors["mb-red"],
      },
      {
        class: "mb-red-35",
        hex: tailwindConfig.theme.extend.colors["mb-red-35"],
      },
      {
        class: "mb-red-15",
        hex: tailwindConfig.theme.extend.colors["mb-red-15"],
      },
    ],
  },
  {
    sectionTitle: "Neutral",
    colors: [
      {
        class: "gray-900",
        hex: tailwindConfig.theme.extend.colors.gray[900],
      },
      {
        class: "gray-850",
        hex: tailwindConfig.theme.extend.colors.gray[850],
      },
      {
        class: "gray-800",
        hex: tailwindConfig.theme.extend.colors.gray[800],
      },
      {
        class: "gray-700",
        hex: tailwindConfig.theme.extend.colors.gray[700],
      },
      {
        class: "gray-600",
        hex: tailwindConfig.theme.extend.colors.gray[600],
      },
      {
        class: "gray-500",
        hex: tailwindConfig.theme.extend.colors.gray[500],
      },
      {
        class: "gray-400",
        hex: tailwindConfig.theme.extend.colors.gray[400],
      },
      {
        class: "gray-300",
        hex: tailwindConfig.theme.extend.colors.gray[300],
      },
      {
        class: "gray-200",
        hex: tailwindConfig.theme.extend.colors.gray[200],
      },
      {
        class: "gray-150",
        hex: tailwindConfig.theme.extend.colors.gray[150],
      },
      {
        class: "gray-100",
        hex: tailwindConfig.theme.extend.colors.gray[100],
      },
      {
        class: "gray-50",
        hex: tailwindConfig.theme.extend.colors.gray[50],
      },
    ],
  },
  {
    sectionTitle: "Actions",
    colors: [
      {
        class: "blue-300",
        hex: tailwindConfig.theme.extend.colors["blue-300"],
      },
      {
        class: "blue-300-35",
        hex: tailwindConfig.theme.extend.colors.blue[300][35],
      },
      {
        class: "blue-300-15",
        hex: tailwindConfig.theme.extend.colors.blue[300][15],
      },
      {
        class: "blue-100",
        hex: tailwindConfig.theme.extend.colors["blue-100"],
      },
      {
        class: "blue-100-35",
        hex: tailwindConfig.theme.extend.colors.blue[100][35],
      },
      {
        class: "blue-100-15",
        hex: tailwindConfig.theme.extend.colors.blue[100][15],
      },
    ],
  },
  {
    sectionTitle: "State",
    colors: [
      {
        class: "success-300",
        hex: tailwindConfig.theme.extend.colors.success[300],
      },
      {
        class: "success-100",
        hex: tailwindConfig.theme.extend.colors.success[100],
      },
      {
        class: "warning-300",
        hex: tailwindConfig.theme.extend.colors.warning[300],
      },
      {
        class: "warning-100",
        hex: tailwindConfig.theme.extend.colors.warning[100],
      },
      {
        class: "error-300",
        hex: tailwindConfig.theme.extend.colors.error[300],
      },
      {
        class: "error-100",
        hex: tailwindConfig.theme.extend.colors.error[100],
      },
    ],
  },
  {
    sectionTitle: "Shades",
    colors: [
      {
        class: "black",
        hex: "#000000",
      },
      {
        class: "white",
        hex: "#FFFFFF",
      },
    ],
  },
];
