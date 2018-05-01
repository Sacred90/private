// const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

const path = require('path');

module.exports = {
  entry:"./assets/js/main.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [
        {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: [
              /node_modules/
            ]
          }
      ]
  },
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',  //source of static assets
      port: 7700, // port to run dev-server
  },
};
