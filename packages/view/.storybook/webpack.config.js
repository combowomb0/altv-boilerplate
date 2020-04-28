const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias['alt-client'] = path.join(__dirname, '../src/__mocks__/alt.js');

  return config;
};