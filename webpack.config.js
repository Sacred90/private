const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    startPage: "./assets/js/start-page.js",
    gallery: "./assets/js/gallery.js",
    about: "./assets/js/about.js"
  },
  output: {
    path: __dirname + "/dist", // Folder to store generated bundle
    filename: "[name].bundle.js" // Name of generated bundle after build
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000, // Convert images < 10kb to base64 strings
              name: "images/[hash]-[name].[ext]",
              fallback: "file-loader"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "fonts/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    // configuration for webpack-dev-server
    contentBase: "dist", //source of static assets
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["startPage"],
      title: "startPage",
      filename: "./index.html",
      template: "./assets/html/index.html"
    }),
    new HtmlWebpackPlugin({
      chunks: ["gallery"],
      title: "gallery",
      filename: "./gallery.html",
      template: "./assets/html/gallery.html"
    }),
    new HtmlWebpackPlugin({
      chunks: ["about"],
      title: "about",
      filename: "./about.html",
      template: "./assets/html/about.html"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};
