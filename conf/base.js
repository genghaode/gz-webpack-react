var webpack = require('webpack'),
  path = require('path'),
  commonPath = require('./commonPath'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
  env = process.env.NODE_ENV.trim(),
  fs = require('fs'),
  rucksack =  require('rucksack-css'),
  autoprefixer =  require('autoprefixer')


const pkgPath = path.join(commonPath.rootPath, 'package.json')
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}

let theme = {}
if (pkg.theme && typeof(pkg.theme) === 'string') {
  let cfgPath = pkg.theme;
  if (cfgPath.charAt(0) === '.') {
    cfgPath = path.resolve(commonPath.rootPath, cfgPath)
  }
  const getThemeConfig = require(cfgPath)
  theme = getThemeConfig()
} else if (pkg.theme && typeof(pkg.theme) === 'object') {
  theme = pkg.theme
}


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
      'redux-thunk'
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
    // }, {
    //   test: /\.module\.less$/,
    //   use: ExtractTextWebpackPlugin.extract({
    //     fallback: 'style-loader',
    //     use: [
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           sourceMap: true,
    //           modules: true,
    //           localIdentName: '[local]___[hash:base64:5]!'
    //         }
    //       },
    //       {
    //         loader: 'postcss-loader',
    //         options: {
    //           plugins: (loader)=> [
    //             rucksack(),
    //             autoprefixer({
    //               browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    //             })
    //           ]
    //         }
    //       },
    //       {
    //         loader: 'less-loader',
    //         options: {
    //           sourceMap: true,
    //           modifyVars: JSON.stringify(theme)
    //         }
    //       }
    //     ]
    //   })
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
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      { context: commonPath.rootPath, from: 'static/*', ignore: ['*.md'] }
    ]),
    new ExtractTextWebpackPlugin({
      filename: '[name].[contenthash:6].css',
      allChunks: true
    }),
  ]
}
