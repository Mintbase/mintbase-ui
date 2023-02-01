const webpack = require('webpack');

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
  webpackFinal: async (config) => ({
    ...config,
    plugins: [
        ...config.plugins.filter(plugin => plugin.constructor.name !== 'IgnorePlugin'),
        new webpack.IgnorePlugin({
            resourceRegExp: /react-dom\/client$/,
            contextRegExp: /(app\/react|app\\react|@storybook\/react|@storybook\\react)/
        }),
    ],
}),
};
