<template>
  <div>
    Home page
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  /**
   *
   * @param {*} props 父组件传递过来的属性
   * @param {*} context
   */
  //   setup里面不能写this
  //   setup(props, context) {
  setup(props, { attrs, slots, emit }) { // 对象解构写法
    // 参数一
    console.log(props.message);
    // 参数二
    console.log(attrs.id,  attrs.class);
    // 写render函数的时候会在这里拿到slot 而不是在template
    console.log(slots);
    console.log(emit);
  },
};
</script>

<style scoped></style>
