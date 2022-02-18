<template>
  <div>
    <button @click="changeData">改变数据</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";

export default {
  setup() {
    // 定义可响应式对象
    const info = reactive({
      name: "zzb",
      age: 18,
      friend: {
        name: "kobe",
      },
    });
    // 侦听器watch
    // 默认可以深度监听
    // watch([info, name], (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue", oldValue);
    // });

    // 如果将对象解构 就不会深度监听了
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue", oldValue);
      },{
        deep: true,
        immediate: true // 加载页面立即执行
      }
    );

    const changeData = () => {
      info.friend.name = "bzz";
    };

    return {
      changeData,
    };
  },
};
</script>

<style scoped></style>
