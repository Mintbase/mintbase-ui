module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  core: {
    builder: 'webpack5',
  },
  addons: [
    "@storybook/addon-essentials",
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
