var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['','.js', '.jsx']
  },
  entry: "./src/index",
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
