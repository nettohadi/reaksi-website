const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
    publicPath: "/public/",
  },
  devServer: {
    port: 3334,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    hot: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      hash: true,
      publicPath: "/public/",
      template: "./html_template/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "css/bundle.css" : "[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
