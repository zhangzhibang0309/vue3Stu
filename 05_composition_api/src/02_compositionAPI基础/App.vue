<template>
  <div>
    <home message="hhhhh" id="aaa" class="bbb">
      <template #default>
        <h2>hhh</h2>
      </template>
    </home>
  </div>
</template>

<script>
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  // setup函数有哪些参数>
  // setup函数有什么样的返回值
  setup() {},
};
</script>

<style scoped></style>
