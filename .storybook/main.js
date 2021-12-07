const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ["../src/**/*stories.@(js|jsx|ts|tsx)"],
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
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
