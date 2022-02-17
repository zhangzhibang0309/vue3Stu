<template>
  <div>
    <h2>{{ info.name }}</h2>
    <button @click="changeInfo">修改info</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";

export default {
  setup() {
    //   ref会给传入的数据进行深层的响应式
    // const info = ref({ name: "zzb" });
    // 如果想用浅层的响应式 那就用shallowRef
    const info = shallowRef({ name: "zzb" });

    const changeInfo = () => {
      info.value.name = "james";
      //   强制让info响应式 也就是强制刷新一下
      triggerRef(info);
    };

    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
