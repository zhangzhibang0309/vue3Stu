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

    const changeName = () => (name.value = "kobe");
    const changeAge = () => age.value++;

    // 会自动检测回调函数里面依赖的数据 然后自动监测
    watchEffect(() => {
      console.log("name:", name.value, "age:", age.value);
    });

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
