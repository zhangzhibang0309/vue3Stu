<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>

    <!-- tag="p"会把transition渲染成p标签 -->
    <transition-group tag="p" name="zzb">
      <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers);
    },
  },
};
</script>

<style scoped>
.item {
  margin-right: 10px;
  display: inline-block;
}

.zzb-enter-from,
.zzb-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.zzb-enter-active,
.zzb-leave-active {
  transition: all 1s ease;
}

/* 取消空间占位 */
.zzb-leave-active {
  position: absolute;
}

.zzb-move {
  transition: transform 1s ease;
}
</style>
