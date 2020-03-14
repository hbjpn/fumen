const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // mode: "production",
  mode: "development",
  watchOptions: {
    ignored: /node_modules/
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fumen2.js',
    library: "Fumen",
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: "eslint-loader",
        options: {
            fix: true
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CopyWebpackPlugin(
      [
        {
          from: "src/assets",
          to: "assets",
        },
        {
          from: "src/index.html",
          to: "index.html",
        },  
        {
          from: "src/view.html",
          to: "view.html",
        },  
        {
          from: "src/fonts.html",
          to: "fonts.html",
        },  
      ],
    ),
  ]
};
