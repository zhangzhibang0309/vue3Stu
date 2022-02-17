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
    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功");
      },2000)

      // 根据name和age两个变量发送网络请求
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel()
        // 这样做就是在上次请求还没完成的情况下,数据再次发生更新,那就把之前的请求给撤销掉
        clearTimeout(timer)
        console.log("onInvalidate")
      })

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
