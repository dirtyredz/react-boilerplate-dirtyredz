const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['','.js', '.jsx']
  },
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
        }
    ]
  },
  output: {
    path: path.join(__dirname, "static/js"),
    filename: "react.min.js",
    publicPath: '/js/'
  },
  performance: { hints: false },
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
