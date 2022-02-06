import { sum } from "./js/math.js";
import { createApp } from "vue/dist/vue.esm-bundler";
const { priceFormat } = require("js/format");

import App from "./vue/app";
import axios from "axios";

import "./js/element.js";
if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log("element模块发生更新了");
  });
}

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount("#app");

// axios
//   .get("/api/moment")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
