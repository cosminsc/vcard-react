var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist'),
    SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.jsx',
    output: {
        path: DIST_DIR + '/app',
        filename: 'app.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new CopyWebpackPlugin([
            { from: SRC_DIR + '/app/images', to: DIST_DIR + '/app/images' }
        ])
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
        }
    }

};

module.exports = config;