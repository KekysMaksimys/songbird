const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  devServer: {
    static:{
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Song Bird App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ]
}
