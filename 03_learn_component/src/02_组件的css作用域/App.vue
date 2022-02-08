<template>
    <h2>App</h2>
    <hello-world-vue></hello-world-vue>
</template>

<script>
import HelloWorldVue from "./HelloWorld.vue"

export default {
    components: {
        HelloWorldVue,
    }
}
</script>

<style scoped>
/* 这种情况会有一层穿透 导致子组件的最外一层也会生效 */
h2 {
    color: red;
}
</style>