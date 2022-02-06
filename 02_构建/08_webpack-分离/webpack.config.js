const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  watch: false,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  // 当某些资源不在webpack打包的资源中的时候 会从这个文件夹里面找
  devServer: {
    //  contentBase: "./public"
    hot: true,
    // host: "0.0.0.0",
    port: 7777,
    open: true,
    // compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": "",
        },
        // 当请求https的时候 这里设置false 就不需要证书了
        secure: false,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    extensions: [".js",".json",".mjs",".vue"],
    // 别名
    alias: {
      "@": path.resolve(__dirname,"./src"),
      "js": path.resolve(__dirname,"./src/js"),
    }
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
    new CleanWebpackPlugin(), // 打包时删除之前的dist
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", // 指定模板路径
      title: "webpackStu", // 指定htmltitle，这个也是用变量找到的
    }),
    new DefinePlugin({
      BASE_URL: "'./'", // 填充模板里的变量
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // 开发阶段用contentBase
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
    new VueLoaderPlugin(),
  ],
};
