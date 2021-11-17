const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      'authentic-sans-60': ["AuthenticSans-60", "sans-serif"],
      'authentic-sans-90': ["AuthenticSans-90", "sans-serif"],
      'authentic-sans-130': ["AuthenticSans-130", "sans-serif"],
      'authentic-sans-150': ["AuthenticSans-150", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        'mb-red': "#FF2424",
        'mb-red-35': "#3A1C2A",
        'mb-red-15': "#FFDEDE",
        'mb-blackblue': "#070C2B",
        gray: {
          50: "#F9F9F9",
          100: "#F3F4F8",
          150: "#E8EAF0",
          200: "#D2D4DA",
          300: "#B3B5BD",
          400: "#9496A1",
          500: "#777986",
          600: "#5B5D6B",
          700: "#404252",
          800: "#282A3A",
          850: "#1E2030",
          900: "#101223",
        },
        'blue-100': '#C5D0FF',
        'blue-300': '#4F58A3',
        blue: {
          100: {
            15: "#2B2E42",
            35: "#3F4254"          },
          300: {
            15: "#EBEDFB",
            35: "#C2C5DD"
          },
        },
        success: {
          100: "#9FED8F",
          300: "#0A7D6C"
        },
        error: {            
          100: "#ED5A5A",
          300: "#C74C4C"
        },
        warning: {
          100: "#FFF4CD",
          300: "#FFE855",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
