const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "/src/index.js",
    output: {
        path:path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
          {
            test: /\.?jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react"]
              },
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    resolve: {
      extensions: [".jsx", ".js"]
    }
  };