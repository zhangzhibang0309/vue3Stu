const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    // 这里必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
};
