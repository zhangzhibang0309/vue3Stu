<template>
  <div>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
      </div>
      <!-- 两个动画持续时长不同，这种情况下有时候会出现冲突 -->
      <!-- 所以要在上面transition加一个type属性 决定以谁的时间决定整个动画的结束时间 不过似乎 -->
      <!-- 也不是很完美 所以还是设置成一样的时间就行了 -->
      <!-- 这里还有个duration参数，可以设置动画持续时间，这里的优先级要比下面的css级别高 可以直接设置字符串数字 也可指设置对象-->
      <transition name="zzb" type="transition" :duration="{ enter: 800, leave: 1000 }">
        <h2 class="title" v-if="isShow">Hello World</h2>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.app {
  width: 200px;
  margin: 0 auto;
}
.title {
  display: inline-block;
}

.zzb-enter-from,
.zzb-leave-to {
  opacity: 0;
}

.zzb-enter-active,
.zzb-leave-active {
  transition: opacity 2s ease;
}

.zzb-enter-active {
  animation: bounce 1s ease;
}
.zzb-leave-active {
  animation: bounce 1s ease reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(5.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
