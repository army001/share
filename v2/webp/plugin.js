/**
 * 独立的页面
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');
const BuildI18NPlugin = require('./plugin/build-i18n-plugin');

const ROOT_PATH = path.resolve(__dirname, '../');
const env = process.env.NODE_ENV;
const templdir = path.resolve('./src/templates');
const htmls = fs.readdirSync(templdir);

const htmlWebpackPlugins = htmls.map((html) => {
  const arr = html.split('.');
  const name = arr[0];
  const ext = arr[1];
  if (ext !== 'html') {
    return null;
  }

  return new HtmlWebpackPlugin({
    chunks: [name],
    template: `${templdir}/${html}`,
    filename: `${name}.html`,
    cache: false
  });
}).filter(v => v);

// HappyPack
const threads = os.cpus().length;
const jsHappyPackPlugin = new HappyPack({
  id: 'js',
  threads,
  loaders: [{
    loader: 'babel-loader'
  }]
});

const isProd = env === 'production';
function createStyleHappyPlugin() {
  const cssLoader = isProd ? [MiniCssExtractPlugin.loader] : [];

  cssLoader.push({
    loader: 'css-loader',
    options: {
      minimize: isProd
    }
  });

  return new HappyPack({
    id: 'style',
    threads,
    loaders: [
      { loader: 'style-loader' },
      ...cssLoader,
      {
        loader: 'less-loader',
        options: {
          paths: [path.resolve(__dirname, '../', 'src', 'electron-render')]
        }
      }
    ]
  });
}
const HappyPackPlugins = [
  jsHappyPackPlugin,
  createStyleHappyPlugin()
];

const definePlugin = new DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
});


module.exports = [
  new webpack.ProvidePlugin({
    React: 'react'
  }),
  new CleanWebpackPlugin(['dist'], {
    root: ROOT_PATH,
    // exclude:  ['templates.js'],
    verbose: true,
    dry: false
  }),
  definePlugin,
  ...htmlWebpackPlugins,
  ...HappyPackPlugins,
];
