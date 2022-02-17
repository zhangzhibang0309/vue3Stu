<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const info = reactive({ name: "zzb", age: 18 });
    // 这样做是值传递 所以数据不具有响应式
    // let { name, age } = info;

    // 用toRefs这个API包裹 那他就会是把每个数据返回成为一个ref对象 就会成为响应式了
    // 1.toRefs会对所有属性转成ref
    // let { name, age } = toRefs(info);
    // 2.toRef只将其中一个对象转换
    let { name } = info;
    let age = toRef(info, "age");

    const changeAge = () => {
      info.age++;
    };

    return {
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
