const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/app.js"
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public")
  },
  // devtool: "inline-source-map",
  devServer: {
    contentBase: "./public"
  },

  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
