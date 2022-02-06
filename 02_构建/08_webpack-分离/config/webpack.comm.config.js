const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  target: "web",
  watch: false,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js",
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue"],
    // 别名
    alias: {
      "@": path.resolve(__dirname, "../src"),
      js: path.resolve(__dirname, "../src/js"),
    },
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
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6].[ext]",
        },
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 指定模板路径
      title: "webpackStu", // 指定htmltitle，这个也是用变量找到的
    }),
    new DefinePlugin({
      BASE_URL: "'./'", // 填充模板里的变量
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // 开发阶段用contentBase
    new CopyWebpackPlugin({// 本来应该抽到生产环境 但是开发环境的配置没弄好 就先用这个了
      patterns: [
        {
          from: "./public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],
};
