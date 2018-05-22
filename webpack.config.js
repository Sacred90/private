const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    start: './src/js/start-page.js',
    gallery: './src/js/gallery.js',
    about: './src/js/about.js',
    GPUComputationRenderer: './src/js/libs/GPUComputationRenderer.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
   },
  devtool: 'source-map',
  module: {
    rules:
    [{
     test: /\.js$/,
     exclude: /node_modules/,
     use: 'babel-loader'
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      }
    }, {
      test: /\.(png|jp(e*)g|svg)$/,
      use: [{
          loader: 'url-loader',
          options: {
              limit: 10000, // Convert images < 10kb to base64 strings
              name: '../images/[hash]-[name].[ext]',
              fallback: 'file-loader'
          }
      }],
    }, {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: function () {
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader'
    }]
  },]
 },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Start page',
      inject: 'head',
      template: './src/html/index.html',
      chunks: ['app','start', 'GPUComputationRenderer'],
      filename: './dist/index.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      title: 'Gallery page',
      template: './src/html/gallery.html',
      chunks: ['gallery'],
      filename: './dist/gallery.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      title: 'About page',
      template: './src/html/about.html',
      chunks: ['about'],
      filename: './dist/about.html' //relative to root of the application
  }),
  ]
};
