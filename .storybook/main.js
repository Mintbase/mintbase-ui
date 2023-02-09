module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-essentials",
    'storybook-tailwind-dark-mode',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-addon-themes",
  ],
};
