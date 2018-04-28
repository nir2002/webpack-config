const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const APP_DIR = path.join(__dirname, 'src');
const APP_FILE_NAME = "app.js";
const APP_HTML_TEMPLEATE = "index.html";
const APP_HTML_FILENAME = "index.html";
const OUTPUT_PATH = path.resolve(__dirname, './dist');
const BUNDLE_FILENAME = 'app.bundle.js';

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(APP_DIR, APP_HTML_TEMPLEATE),
  filename: "index.html"
});

module.exports = {
  entry: path.join(APP_DIR, APP_FILE_NAME),
  output: {
    path: OUTPUT_PATH,
    filename: BUNDLE_FILENAME
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["babel-preset-env", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
}
