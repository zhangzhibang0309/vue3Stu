<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // watchEffect: 自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    // 会自动检测回调函数里面依赖的数据 然后自动监测
    const stop = watchEffect(() => {
      console.log("name:", name.value, "age:", age.value);
    });

    const changeName = () => (name.value = "kobe");
    // 调用stop就不会在调用监听的函数
    const changeAge = () => {
      age.value++;
      if (age.value > 25) stop();
    }; 

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
