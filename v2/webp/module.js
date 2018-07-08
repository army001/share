module.exports = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'happypack/loader?id=js'
    },
    {
      test: /\.less$/,
      loader: 'happypack/loader?id=style'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /.*\.(gif|png|jpe?g)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/img/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /.*\.(mp3|aif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/audio/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|svg|woff)(\?(\w|#)*)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/font/[name].[ext]'
          }
        }
      ]
    }
  ]
};
