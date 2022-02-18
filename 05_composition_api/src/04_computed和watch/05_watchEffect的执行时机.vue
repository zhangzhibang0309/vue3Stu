<template>
  <div>
    <title ref="title">title</title>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    // 想在setup用ref拿到元素就先开一个与标签ref相同的变量,先给他个null,然后返回,在dom挂载的时候会将元素自动绑定在这个变量上面,然后在用watchEffect去监听,就可以拿到元素
    const title = ref(null);

    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // flush可以控制watch的时机
        flush: "post",
      }
    );

    return {
      title,
    };
  },
};
</script>

<style scoped></style>
