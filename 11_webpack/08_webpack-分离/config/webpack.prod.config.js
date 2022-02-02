const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.comm.config")
module.exports = merge(commonConfig,{
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(), // 打包时删除之前的dist
  ],
});
