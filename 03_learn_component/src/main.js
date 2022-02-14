import { createApp } from "vue";
import App from "./15_组件的v-model/App.vue";

// import()函数形式导入会对模块进行分包打包
// import("./12_异步组件的使用/utils/math").then(res => {
//     console.log(res.sum(20.30));
// })

createApp(App).mount("#app");
