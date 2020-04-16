const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const sourcePath = path.resolve(process.cwd(), 'src');
const rootDir = path.resolve(process.cwd(), '..', '..');
const outputPath = path.resolve(rootDir, 'resources', 'main', 'client', 'view');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AltVWebpackPlugin = require('altv-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(sourcePath, 'index.tsx'),
  stats: 'minimal',
  output: {
    path: outputPath,
    filename: 'main.js'
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
          !isProduction && {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] }
          },
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
            options: {
              hmr: !isProduction,
            },
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
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new AltVWebpackPlugin(),
    new webpack.EnvironmentPlugin({ 'process.env.NODE_ENV': isProduction ? 'production' : 'development' }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new HtmlWebpackPlugin({ template: path.resolve(process.cwd(), 'public', 'index.html') })
  ]
};