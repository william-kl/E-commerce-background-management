const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
//const MiniCssExtractPugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const config = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ],
  mode: "development",

  module: {
    rules: [
      {
        test: /\.jsx$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:[['@babel/preset-env', {'useBuiltIns':'usage', 'corejs': 3, 'targets':'defaults'}], '@babel/preset-react']
          } 
        }
      }, {
        test: /\.js$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:[['@babel/preset-env', {'useBuiltIns':'usage', 'corejs': 3, 'targets':'defaults'}], '@babel/preset-react']
          } 
        }
      },{
        test: /\.(sass|scss|css)$/,
        use: ['style-loader','css-loader','sass-loader']
      },{
        test: /\.(svg|eot|woff|woff2|ttf|otf)$/,
        use: ['file-loader']
      },{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            },
          },
        ],
      }
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin({template: './src/index.html'})
  // ]
}

if(currentTask == "build"){
  config.mode = "production";
  //config.module.rules[1].use[0] = MiniCssExtractPugin.loader;
  //config.plugins.push(new MiniCssExtractPugin({filename: 'main.[hash].css'}), new CleanWebpackPlugin());
  config.plugins.push(new CleanWebpackPlugin());
}

module.exports = config;