<template>
  <div>
    App
    <h2>{{ counter }}</h2>
    <button @click="increment">App+1</button>
    <Home></Home>
  </div>
</template>

<script>
import { ref, provide, readonly } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("zzb");
    let counter = ref(100);

    // 用readonly限制不让子组件去修改父组件传过去的值
    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => counter.value++;

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
