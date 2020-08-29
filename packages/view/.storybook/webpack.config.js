const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias['alt-client'] = path.join(__dirname, '../src/__mocks__/alt.js');

  config.module.rules.unshift({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};