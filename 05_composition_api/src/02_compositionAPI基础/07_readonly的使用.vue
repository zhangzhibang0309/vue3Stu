<template>
  <div>
    <button @click="updateState">修改</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";

export default {
  setup() {
    // 1.普通对象
    const info1 = { name: "zzb1" };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式对象
    const info2 = reactive({ name: "zzb2" });
    const readonlyInfo2 = readonly(info2);

    // 3.响应式的对象ref
    const info3 = ref("zzb3");
    const readonlyInfo3 = readonly(info3);

    const updateState = () => {
      readonlyInfo1.name = "kobe";
      readonlyInfo2.name = "kobe";
      readonlyInfo3.name = "kobe";
      info3.name = "james";
      console.log(readonlyInfo3.name);
    };

    return {
      updateState,
    };
  },
};
</script>

<style scoped></style>
