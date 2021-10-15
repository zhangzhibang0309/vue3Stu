const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式
        // 写法1
        // loader: "css-loader"

        // 写法2
        use: [
          // {loader: "css-loader"}
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/, // 正则表达式
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // {
      //   test: /\.(css|less)$/, // 正则表达式
      //   use: ["style-loader", "css-loader", "less-loader"],
      // },
      {

      }
    ],
  },
};
