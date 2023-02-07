const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: false,
    port: 8095,
    //devtool: 'inline-source-map',
    open: true
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext]',
      },
    },
    {
      test: /\.(woff|woff2|ttf|eot|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name].[hash][ext]',
      },
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {importLoaders: 1},
      },
        'postcss-loader',
      ],
    },
  ],
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
};

