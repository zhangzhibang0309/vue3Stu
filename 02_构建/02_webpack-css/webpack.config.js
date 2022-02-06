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
        // 1.loader的写法(语法糖)
        // loader: "css-loader"

        // 2.完整的写法
        use: [
          // {loader: "css-loader"} // 有额外参数的时候
          "style-loader",
          "css-loader",
          "postcss-loader", // 然后只写这一句就可以了
          // { 代码太多 直接放到postcss.config.js
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          // },
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
      {},
    ],
  },
};
