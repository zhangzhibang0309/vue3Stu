import { sum } from "./js/math.js";
import { createApp } from "vue/dist/vue.esm-bundler";
const { priceFormat } = require("./js/format");

import App from "./vue/app.vue";

import "./js/element.js";

console.log(sum(20, 30));
console.log(priceFormat());

// Vue代码
// const app = createApp({
//   template: `<h2>我是Vue渲染出来的</h2>`,
//   data() {
//     return {
//       title: "Hello World",
//     };
//   },
// });
const app = createApp(App);
app.mount("#app");
