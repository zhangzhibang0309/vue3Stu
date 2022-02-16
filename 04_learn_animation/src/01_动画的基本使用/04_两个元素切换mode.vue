<template>
  <div>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
      </div>
      <transition name="zzb" mode="in-out">
        <h2 class="title" v-if="isShow">Hello World</h2>

        <h2 class="title" v-else>Hello World</h2>

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
  transition: opacity 1s ease;
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
