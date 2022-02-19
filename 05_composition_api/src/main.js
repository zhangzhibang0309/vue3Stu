import { createApp } from "vue";
import App from "./08_setup顶层编写方式/App";

const app = createApp(App);

// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log("全局的created生命周期");
//   },
// });

app.mount("#app");
