var webpack = require('webpack'),
  path = require('path'),
  commonPath = require('./commonPath'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  env = process.env.NODE_ENV.trim(),
  fs = require('fs')



module.exports = {
  entry: {
    index: path.join(commonPath.srcPath, 'index.js'),
    vendor: [
      'history',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-thunk',
    ]
  },
  output: {
    path: commonPath.public
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(commonPath.rootPath, 'node_modules'),
      commonPath.srcPath
    ],
    alias: {
      'components': path.join(commonPath.srcPath, 'components'),
      'containers': path.join(commonPath.srcPath, 'containers'),
      'utils': path.join(commonPath.srcPath, 'utils')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.join(commonPath.rootPath, 'node_modules'),
      loader: 'babel-loader?cacheDirectory=true'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=819200'
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=819200&name=[path][name].[ext]'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: commonPath.indexHTML
    }),
    new webpack.DefinePlugin({
      __DEV__: env === 'development',
      __PROD__: env === 'production',
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
}