<template>
  <h2>我是Vue渲染出来的</h2>

  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: "App",
    };
  },
};
</script>

<style></style>