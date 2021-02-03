const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const sourcePath = path.resolve(process.cwd(), 'src');
const rootDir = path.resolve(process.cwd(), '..', '..');
const outputPath = path.resolve(rootDir, 'resources', 'main', 'client', 'view');

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: path.resolve(sourcePath, 'index.tsx'),
    stats: {
      colors: true,
    },
    output: {
      path: outputPath,
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          }
        },
        {
          test: /\.svg$/,
          loader: '@svgr/webpack',
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
        },
        {
          test: /\.module\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:8]',
                },
              },
            },
          ],
        },
        {
          test: /\.(scss|sass)$/,
          exclude: /\.module\.(scss|sass)$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.module\.(scss|sass)$/,
          exclude: /node_modules/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:8]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|svg|ogg|jpe?g)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/[name].[contenthash:8].[ext]',
          },
        },
        {
          exclude: [
            /\.(js|mjs|jsx|ts|tsx|css|sass|scss)$/,
            /\.html$/,
            /\.json$/,
          ],
          loader: 'file-loader',
          options: {
            name: 'static/[name].[contenthash:8].[ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        isProduction && new TerserPlugin({
          extractComments: {
            condition: 'all',
            // delete all comments
            filename: () => '',
          },
        }),
      ].filter(Boolean),
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: './src/**/*.{ts,tsx}',
          options: {
            cache: true,
          },
        },
        typescript: {
          configOverwrite: {
            compilerOptions: {
              sourceMap: false,
              inlineSourceMap: false,
              declarationMap: false,
            },
          },
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
      isProduction && new OptimizeCssAssetsPlugin(),
      new HtmlPlugin({
        template: path.resolve(process.cwd(), 'public', 'index.html'),
      }),
      new CleanWebpackPlugin(),
    ].filter(Boolean),
  };
};
