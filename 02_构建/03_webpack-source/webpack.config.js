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
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      // webpack5之前的资源打包loader
      // {
      //   test: /\.(jpg|png)$/, // 正则表达式
      //   dependency: { not: ["url"] },
      //   use: {
      //     loader: "file-loader",
      //     loader: "url-loader",
      //     options: {
      //    // output: "img",
      //       name: "img/[name]_[hash:6].[ext]",
      //       limit: 100 * 1024, // 小于这个才用base64
      //     },
      //   },
      //   type: "javascript/auto",
      // },
      // 然后在webpack5之后上面那些loader都不用了（根据我的测试还发现了各种bug），比如raw-loader，url-loader，file-loader；
      // 现在都用下面这个-资源模块类型（asset module type），来代替上面这些东西。
      {
        test: /\.(jpg|png)$/, // 正则表达式
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 200 * 1024, // 打包base64的最大限制
          },
        },
      },

      // 字体的打包 当然还是用资源模块类型 曾经也是用file-loader 因为已经不用了 所以也就不写了
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6].[ext]",
        },
      },
    ],
  },
};
