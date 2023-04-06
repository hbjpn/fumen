const path = require('path');
const webpack = require('webpack');
const pjson = require("./package.json");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require("fs");
const lic = fs.readFileSync('./LICENSE.txt', 'utf8');
const ofl = fs.readFileSync('./OFL.txt', 'utf8');

module.exports = {
  // mode: "production",
  mode: "development",
  watchOptions: {
    ignored: /node_modules/
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fumen.js',
    library: "Fumen",
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    rules: [
      /*{
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: "eslint-loader",
        options: {
            fix: true
        }
      },*/
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/lib",
          to: "lib",
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
          from: "src/font-make.html",
          to: "font-make.html",
        },   
      ],
    }),
    new webpack.BannerPlugin({
      banner: `
/*!
${pjson.name} v${pjson.version}

The ${pjson.license} License (${pjson.license})

${lic}


** Musical font parts are provided under OFL lisence **

${ofl}
*/
`,
      raw: true
    })
  ]
};
