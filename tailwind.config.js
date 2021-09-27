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
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
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
        mintbaseRed: "#FF2424",
        mintbaseBlue: "#070C2B",
        gray: {
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
        blue: {
          100: "#C5D0FF",
          300: "#4F58A3",
        },
        state: {
          success: {
            500: "#0A7D6C",
            300: "#C8FDBD",
          },
          error: {
            500: "#C74C4C",
            300: "#ED5A5A",
          },
          warning: {
            500: "#FFD53D",
            300: "#FFE999",
            100: "#FFF4CD",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
