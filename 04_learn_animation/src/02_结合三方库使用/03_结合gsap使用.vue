<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <div>
      <transition @enter="enter" @leave="leave" :css="false">
        <h2 class="title" v-if="isShow">Hello World</h2>
      </transition>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() { 
    return {
      isShow: true,
      distance: 200,
    };
  },
  methods: {
    enter(el, done) {
      console.log("enter");
      gsap.from(el, {
        scale: 0,
        x: this.distance,
        onComplete: done,
      });
    },
    leave(el, done) {
      console.log("leave");
      gsap.to(el, {
        scale: 0,
        x: this.distance,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.title {
  display: inline-block;
}
</style>
