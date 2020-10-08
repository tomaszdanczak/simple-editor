const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name]-[contenthash].js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "template",
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash].css",
    }),
  ],
};
