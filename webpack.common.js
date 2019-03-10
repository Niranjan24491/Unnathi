const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "client/App.js"),
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"]
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
        use: ["cache-loader", "babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: ["cache-loader", "babel-loader"],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        include: [path.resolve(__dirname, "client")],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        use: [
          "url-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 30
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "30",
                speed: 6
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 30
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  target: "web",
  devtool: "eval",
  stats: {
    errorDetails: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Unnathi - Healing Foundation Trust",
      template: "./client/index.ejs",
      favicon: "./client/assets/images/unnathi_logo.png",
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new CompressionPlugin()
  ]
};
