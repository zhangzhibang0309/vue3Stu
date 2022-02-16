<template>
  <div>
    Home page
    <!-- option -->
    <h2>{{ message }}</h2>

    <!-- setup -->
    <h2>{{ title }}</h2>
    <!-- 在模板里面ref对象会自动解包出来value -->
    <h2>当前计数:{{ counter }}</h2>
    <!-- 之前由于浅解包的原因，这里不会解包，但是现在貌似支持解包了 不需要.value -->
    <h2>当前计数:{{ info.counter }}</h2>
    <h2>当前计数:{{ reactiveInfo.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // counter变成了一个ref的可响应式的引用
    let counter = ref(100);
    const info = {
      counter
    }
    const reactiveInfo = {
      counter
    }
    //   局部函数
    const increment = () => {
      // 这里是不能解包的，所以要.value
      counter.value++;
      console.log("increment", counter.value);
    };

    return {
      title: "Hello World",
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped></style>
