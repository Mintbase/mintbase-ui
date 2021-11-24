import "../src/styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Core", "Components"],
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: "Light",
        class: [],
        color: "#ffffff",
        default: true,
      },
      {
        name: "Dark",
        // The class dark will be added to the body tag
        class: ["dark"],
        color: "#000000",
      },
    ],
  },
  backgrounds: {
    default: "light-1",
    values: [
      {
        name: "ligth-1",
        value: "#ffffff",
      },
      {
        name: "ligth-2",
        value: "#F3F4F8",
      },
      {
        name: "dark-1",
        value: "#101223",
      },
      {
        name: "dark-2",
        value: "#1E2030",
      },
    ],
  },
};
