var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx']
  },
  entry: "./src/index.js",
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
    filename: "react.min.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
};
