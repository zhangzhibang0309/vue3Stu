<template>
    <div>
        NavBar组件
        {{ message }}
        <button @click="getParentAndRoot">获取父组件和根组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello NavBar"
        }
    },
    methods: {
        sayHello() {
            console.log("Hello")
        },
        getParentAndRoot() {
            // 但是最好不要在子组件去直接用一些父组件的属性和方法
            // 防止耦合性变强
            console.log(this.$parent)
            console.log(this.$parent)
            console.log(this.$root)
        }
    },
}
</script>

<style scoped>
</style>