const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.comm.config")

module.exports = merge(commonConfig,{
  mode: "development",
  devtool: "source-map",
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
});
