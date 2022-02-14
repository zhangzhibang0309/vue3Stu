<template>
    <div>
        <!-- 必须使用 让dom发生更新 才会触发update钩子 -->
        <h2 ref="title">{{ message }}</h2>
        <button @click="changeMessage">修改message</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "hello"
        }
    },
    methods: {
        changeMessage() {
            this.message = "你好啊，李银河"
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate", this.$refs.title.innerHTML)
    },
    updated() {
        console.log("update", this.$refs.title.innerHTML)
    },
}
</script>

<style scoped>
</style>