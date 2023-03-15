const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// the same way
//  const config = {}

module.exports = {
  // mode: 'development' or 'production'
  mode: "production",
  // input
  entry: {
    main: "./src/index.js",
  },
  // output
  output: {
    filename: "index.js", // name of target file or pattern
    // possible for | filename: "nameScript.js",
    path: path.resolve(__dirname, "dist"), // output path
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
