<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <div>
    <!-- 使用enter-active-class这种属性可以在合适的时机加入特定的class 更好的搭配第三方库使用 -->
      <transition 
      name="zzb"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__flipInY"
      >
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
.title {
  display: inline-block;
}

.animate__flipInY {
    animation-direction: reverse;
}
/* 
.zzb-enter-active {
  animation: bounceInUp 1s ease-in;
}
.zzb-leave-active {
  animation: bounceInUp 1s ease-in reverse;
} */
</style>
