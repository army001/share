/**
 * 独立的页面
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
const os = require('os');

const ROOT_PATH = path.resolve(__dirname, '../');
const env = process.env.NODE_ENV;
const templdir = path.resolve('./templates');

// HappyPack
const threads = os.cpus().length;
const jsHappyPackPlugin = new HappyPack({
  id: 'js',
  threads,
  loaders: [{
    loader: 'babel-loader'
  }]
});

const cssHappyPackPlugin = new HappyPack({
  id: 'style',
  threads,
  loaders: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    {
      loader: 'less-loader',
      options: {
        paths: [path.resolve(__dirname, '../src')]
      }
    }
  ]
  // loaders: ExtractTextPlugin.extract({
  //   fallback: 'style-loader',
  //   use: [
  //     'css-loader',
  //     {
  //       loader: 'less-loader',
  //       options: {
  //       }
  //     }
  //   ]
  // })
});
const HappyPackPlugins = [
  jsHappyPackPlugin,
  cssHappyPackPlugin
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
    verbose: true,
    dry: false
  }),
  definePlugin,
  new HtmlWebpackPlugin({
    chunks: ['index'],
    template: `${templdir}/index.html`,
    filename: 'index.html',
    cache: false
  }),
  ...HappyPackPlugins,
  new webpack.HotModuleReplacementPlugin()
];
