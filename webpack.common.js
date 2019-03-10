const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'client/App.js'),
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['cache-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: ['cache-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'client'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  target: 'web',
  devtool: 'eval',
  stats: {
    errorDetails: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'unnathi.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Unnathi - Healing Foundation Trust',
      template: './client/index.ejs',
      favicon: './client/assets/images/unnathi_logo.png',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new CompressionPlugin()
  ]
};
