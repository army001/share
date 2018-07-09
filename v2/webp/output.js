const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');

const debug = process.env.NODE_ENV !== 'production';
const output = {
  path: path.join(ROOT_PATH, './dist'),
  publicPath: debug ? '' : '',
  libraryTarget: 'umd',
  filename: '[name].js?[hash:8]'
};
module.exports = output;
