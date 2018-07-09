const modules = require('./module');
const entry = require('./entry');
const output = require('./output');
const plugins = require('./plugin');
const resolve = require('./resolve');

module.exports = {
  devtool: 'source-map',
  entry,
  output,
  plugins,
  module: modules,
  resolve,
  node: { __filename: true, __dirname: true }
};
