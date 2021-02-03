const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:8]'
          }
        }
      }
    },
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          transpileOnly: true,
        },
        forkTsCheckerWebpackPluginOptions: {
          async: false,
        },
        include: [path.resolve(__dirname, '../src')],
      },
    },
  ],
};
