<template>
  <div>
    <button @click="increament">{{ counter }}</button>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";

export default {
  setup() {
    const counter = ref(0);
    const increament = () => counter.value++;

    onMounted(() => {
      console.log("App Mounted1");
    });
    onMounted(() => {
      console.log("App Mounted2" );
    });
    onUpdated(() => {
      console.log("App onUpdated");
    });
    onUnmounted(() => {
      console.log("App onUnmounted");
    });

    return {
      counter,
      increament,
    };
  },
};
</script>

<style scoped></style>
