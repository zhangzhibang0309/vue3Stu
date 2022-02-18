<template>
  <div>
    <button @click="changeData">改变数据</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";

export default {
  setup() {
    const info = reactive({ name: "zzb", ahe: 18 });

    // 1.侦听watch时，传入一个getter函数，newValue直接返回值
    // watch(
    //   () => info.name,
    //   (newValue, oldValue) => {
    //     console.log("newValue:", newValue, "oldValue", oldValue);
    //   }
    // );

    // 2.传入一个可响应式对象：reactive对象/ref对象
    // 情况一：直接传入对象，返回的newValue是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue", oldValue);
    // });
    // 如果希望newValue和oldValue是一个普通对象
    watch(
      // 这种i情况其实就还是传入了一个getter函数
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue", oldValue);
      }
    );

    // 情况二：ref对象获取newValue和oldValue是value值的本身
    let name = ref("zzb");
    watch(name, (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue", oldValue);
    });

    const changeData = () => {
      name.value = "bzz";
    };

    return {
      changeData,
    };
  },
};
</script>

<style scoped></style>
