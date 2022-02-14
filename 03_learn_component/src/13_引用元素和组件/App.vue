<template>
    <div>
        <h2 ref="title">哈哈哈</h2>
        <button @click="btnClick">获取元素</button>

        <!-- NavBar组件 -->
        <nav-bar ref="NavBar"></nav-bar>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue"
export default {
    components: {
        NavBar
    },
    data() {
        return {
            names: ["abc", "cba"]
        }
    },
    methods: {
        btnClick() {
            console.log(this.$refs.title)

            console.log(this.$refs.NavBar)
            console.log(this.$refs.NavBar.message)
            this.$refs.NavBar.sayHello()

            // $el
            console.log(this.$refs.NavBar.$el)
        }
    },
}
</script>

<style scoped>
</style>