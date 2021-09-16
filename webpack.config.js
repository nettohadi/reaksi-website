const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

console.log({ devMode, process: process.env.NODE_ENV });

module.exports = {
   context: __dirname,
   entry: './src/index.tsx',
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.js',
      publicPath: '/public/',
   },
   devServer: {
      port: 3335,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/',
      hot: true,
   },
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.css$/i,
            use: [
               {
                  loader: devMode
                     ? 'style-loader'
                     : MiniCssExtractPlugin.loader,
                  options: devMode
                     ? { injectType: 'styleTag' }
                     : { publicPath: '/' },
               },
               'css-loader',
            ],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     publicPath: '/images/',
                     outputPath: 'images',
                  },
               },
            ],
         },
         {
            test: /\.md$/,
            use: [
               {
                  loader: 'html-loader',
               },
               {
                  loader: 'markdown-loader',
                  options: {},
               },
            ],
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.ts', '.tsx', '.css'],
      alias: {
         '@root': path.resolve(__dirname, 'src'),
         '@shared': path.resolve(__dirname, 'src/components/shared'),
      },
   },
   plugins: [
      new htmlWebpackPlugin({
         filename: 'index.html',
         hash: true,
         publicPath: '/',
         template: './html_template/index.html',
      }),
      new MiniCssExtractPlugin({
         filename: devMode ? 'css/bundle.[contenthash].css' : 'css/bundle.css',
      }),
   ],
   optimization: {
      minimizer: [
         new TerserPlugin({
            terserOptions: {
               keep_classnames: true,
               keep_fnames: true,
            },
            extractComments: false,
         }),
      ],
   },
};
