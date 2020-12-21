const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (config) => {
  if (config.mode === 'production') {
    config.plugins.push(new CompressionPlugin())
  }
  return config;
}
