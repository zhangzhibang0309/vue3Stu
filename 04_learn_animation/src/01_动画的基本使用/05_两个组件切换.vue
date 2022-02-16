<template>
  <div>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
      </div>
      <!-- appear 设置初次渲染 -->
      <transition name="zzb" mode="in-out" appear>
        <component :is="isShow ? 'home' : 'about'"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

export default {
  components: {
    Home,
    About,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
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
