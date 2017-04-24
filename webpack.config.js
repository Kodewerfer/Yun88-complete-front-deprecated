var path = require('path')
var webpack = require('webpack')
module.exports = {
  watch: true,
  module: {
    rules: [
      // css loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // less loader
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // HTML loader mainly for angular templates.
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      // Image and font loader
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: [{
          loader: 'url-loader'
          // options: '?limit=30000&name=[name]-[hash].[ext]'
        }]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //     drop_console: false
    //   }
    // })
  ],
  resolve: {
    modules: [
      path.resolve('./bower_components'),
      'node_modules'
    ],
    alias: {
      flexibility: 'flexibility/flexibility.js',
      lazySize: 'lazysizes/lazysizes.js',
      jquery: 'jquery/dist/jquery.js',
      sticky: 'sticky-kit/jquery.sticky-kit.min.js',
      // folders from here.
      vminpoly: 'vminpoly',
      slick: 'slick-carousel/slick/',
      videojs: 'video.js/dist',
      pefectScroll: 'perfect-scrollbar/min'
    }
  }

}