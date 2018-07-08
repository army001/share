const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');

const debug = process.env.NODE_ENV !== 'production';
const output = {
  path: path.join(ROOT_PATH, './lib'),
  publicPath: debug ? '' : '',
  libraryTarget: 'umd',
  filename: '[name].js?[chunkhash:8]'
};
module.exports = output;
