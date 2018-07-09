const path = require('path');
const baseConfig = require('./base.config');

module.exports = [
  Object.assign(baseConfig, {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      compress: true,
      port: 9000,
      hot: true,
      open: true,
      // openPage: 'todo'
    }
  }),
]
