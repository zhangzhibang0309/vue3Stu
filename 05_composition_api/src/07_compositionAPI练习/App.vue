<template>
  <div>
    <h2>counter: {{ counter }}</h2>
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <button @click="increment">++</button>
    <button @click="decrement">--</button>

    <div>{{ data }}</div>
    <button @click="changeData">修改Data</button>

    <div class="content"></div>

    <div class="scroll">
      <div class="scroll-x">scroll-x:{{ scrollX }}</div>
      <div class="scroll-y">scroll-y:{{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">mouse-x:{{ mouseX }}</div>
      <div class="mouse-y">mouse-y:{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import {
  useConter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks/index";

export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useConter();

    // title
    const titleRef = useTitle("zzb");
    setTimeout(() => {
      titleRef.value = "bzz";
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();

    // localStorage
    const data = useLocalStorage("info", { name: "zzb", age: 18 });
    const changeData = () => (data.value.name = "bzz");

    return {
      counter,
      doubleCounter,
      increment,
      decrement,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      data,
      changeData,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.mouse {
  position: fixed;
  right: 30px;
  bottom: 90px;
}
</style>
