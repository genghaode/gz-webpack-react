var webpack = require('webpack'),
  path = require('path'),
  ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  commonPath = require('./commonPath'),
  config = require('./base')

config.output.filename = 'js/[name].[chunkhash:6].js'
config.output.chunkFilename = 'js/[id].[chunkhash:6].js'

config.devtool = 'cheap-source-map'

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?minimize',
    publicPath: path.join(commonPath.public, 'css')
  })
})

config.plugins[0].options.minify = { removeComments: true, collapseWhitespace: true }

config.plugins.push(
  new ExtractTextWebpackPlugin({
    filename: 'css/[name].[contenthash:6].css',
    allChunks: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    comments: false,
    ie8: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor']
  }),
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
    { context: commonPath.rootPath, from: 'static/*', ignore: ['*.md'] }
  ])
)

module.exports = config