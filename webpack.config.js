var path = require('path'),
   webpack = require('webpack'),
   ExtractTextPlugin = require("extract-text-webpack-plugin"),
   UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist'),
   SRC_DIR = path.resolve(__dirname, 'src');

var config = {
   entry: {
      'js/app.js': SRC_DIR + '/index.jsx',
      // 'js/vendor.js': ['react', 'react-dom'],
      'css/style.css': SRC_DIR + '/styles/style.scss',
   },
   output: {
      path: DIST_DIR,
      filename: "[name]",
      publicPath: "/"
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
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ])
         },
         // fonts
         {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader?name=fonts/[name].[ext]'
         },
         // images
         {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
         },
         {
            test: /\.json$/,
            loader: 'json-loader'
         },
      ]
   },
   plugins: [
      new ExtractTextPlugin('css/style.css', {
         allChunks: true
      }),
      // new UglifyJSPlugin()
   ],
   resolve: {
      extensions: ['.json', '.js', '.jsx'],
      alias: {
         'masonry': 'masonry-layout',
         'isotope': 'isotope-layout'
      }
   }

};

module.exports = config;