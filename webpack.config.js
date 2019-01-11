const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname + '/src', // `__dirname` is root of project and `/src` is source
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname + '/dist', // `/dist` is the destination
    filename: 'bundle.js', // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // loader: "babel-loader"
        loader: path.resolve('./loader/demoLoader.js')
      },
    ]
  },
  // plugins: [
  //   new webpack.NamedModulesPlugin()
  // ]
};

module.exports = config;
