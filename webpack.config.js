var path = require('path'),
   webpack = require('webpack'),
   ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, 'dist'),
   SRC_DIR = path.resolve(__dirname, 'src');

var config = {
   // entry: SRC_DIR + '/app/index.jsx',
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
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
         },
         // Fonts
         {
            test: /\.svg$/,
            loader: 'url-loader',
            options: {
               limit: 65000,
               mimetype: 'image/svg+xml',
               // publicPath: 'assets/',
               name: 'fonts/[name].[ext]'
            }
         },
         {
            test: /\.woff$/,
            loader: 'url-loader',
            options: {
               limit: 65000,
               mimetype: 'application/font-woff',
               name: 'fonts/[name].[ext]'
            }
         },
         {
            test: /\.woff2$/,
            loader: 'url-loader',
            options: {
               limit: 65000,
               mimetype: 'application/font-woff2',
               name: 'fonts/[name].[ext]'
            }
         },
         {
            test: /\.[ot]tf$/,
            loader: 'url-loader',
            options: {
               limit: 65000,
               mimetype: 'application/octet-stream',
               name: 'fonts/[name].[ext]'
            }
         },
         {
            test: /\.eot$/,
            loader: 'url-loader',
            options: {
               limit: 65000,
               mimetype: 'application/vnd.ms-fontobject',
               name: 'fonts/[name].[ext]'
            }
         },
         // images
         {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
            // options: {
            //    name: 'images/[name].[ext]'
            // }
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin('css/style.css', {
         allChunks: true
      })
      // new webpack.ProvidePlugin({
      //    $: "jquery",
      //    jQuery: "jquery",
      //    "window.jQuery": "jquery"
      // })
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