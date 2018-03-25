const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
