var webpack = require('webpack'),
    path = require('path');
 
module.exports = {
    entry: {
        main: './assets/js/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: []
    }
};