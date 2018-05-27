const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    startPage: "./assets/js/start-page.js",
    gallery: "./assets/js/gallery.js",
    about: "./assets/js/about.js"
  },
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: '[name].bundle.js'  // Name of generated bundle after build
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {  // configuration for webpack-dev-server
      contentBase: 'dist',  //source of static assets
      port: 7700, // port to run dev-server
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['startPage'],
      title: 'startPage',
      filename: './index.html',
      template: './assets/html/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['gallery'],
      title: 'gallery',
      filename: './gallery.html',
      template: './assets/html/gallery.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
      title: 'about',
      filename: './about.html',
      template: './assets/html/about.html',
    })
  ]
};
