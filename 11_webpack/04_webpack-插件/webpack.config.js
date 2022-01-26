const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 设置模式，有两种包括development和production
  // 前者是开发者模式，js文件不会丑化，后者就是生产模式
  mode: "development",
  // 这个devtool默认值是eval，改成source-map之后，当你打包后的文件报错后，不仅仅会在静态文件里面报错，会映射到你写的源文件
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  // module里面就是各种loader
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

      // webpack5之前的资源打包loader
      // {
      //   test: /\.(jpg|png)$/, // 正则表达式
      //   dependency: { not: ["url"] },
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       output: "img",
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
  plugins: [
    new CleanWebpackPlugin(), // 打包时删除之前的dist
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", // 指定模板路径
      title: "webpackStu", // 指定htmltitle，这个也是用变量找到的
    }),
    new DefinePlugin({
      BASE_URL: "'./'", // 填充模板里的变量
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
