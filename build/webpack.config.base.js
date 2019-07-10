const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');

const src = path.resolve(__dirname, '../src');

const base = {
  entry: {
    index: path.resolve(src, 'index.js'),
    detail: path.resolve(src, './detail/index.js')
  },
  output: {
    filename: '[name]/index.js',
    chunkFilename: 'assets/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.less'],
    modules: [
      src,
      path.resolve(__dirname, '../node_modules'),
    ]
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: path.resolve(src, 'index.njk'),
          to: 'index.html'
        },
        {
          from: path.resolve(src, './detail/index.njk'),
          to: 'detail.html'
        }
      ]
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(src, 'index.njk'),
    //   filename: 'index.html'
    // })
  ]
};

module.exports = base;
