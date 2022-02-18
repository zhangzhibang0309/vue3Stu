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
    const info = reactive({ name: "zzb", ahe: 18 });
    let name = ref("zzb");
    // 侦听器watch
    watch([info, name], (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue", oldValue);
    });

    const changeData = () => {
      info.value = "bzz";
    };

    return {
      changeData,
    };
  },
};
</script>

<style scoped></style>
