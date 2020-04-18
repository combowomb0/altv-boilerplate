const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AltVPlugin = require('altv-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const sourcePath = path.resolve(process.cwd(), 'src');
const rootDir = path.resolve(process.cwd(), '..', '..');
const outputPath = path.resolve(rootDir, 'resources', 'main', 'client', 'view');

module.exports = {
  entry: path.resolve(sourcePath, 'index.tsx'),
  stats: {
    colors: true
  },
  output: {
    path: outputPath,
    filename: 'main.[contenthash:5].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
              failOnWarning: isProduction,
              cache: true,
            }
          },
        ].filter(Boolean)
      },
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|svg|ogg|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[contenthash:5].[ext]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:5].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: 'all',
          filename: 'vendor.[contenthash:5].js'
        }
      }
    },
  },
  plugins: [
    new AltVPlugin(),
    new webpack.EnvironmentPlugin({ 'process.env.NODE_ENV': isProduction ? 'production' : 'development' }),
    new MiniCssExtractPlugin({ filename: 'main.[contenthash:5].css' }),
    new HtmlPlugin({ template: path.resolve(process.cwd(), 'public', 'index.html') }),
    new CleanWebpackPlugin()
  ]
};