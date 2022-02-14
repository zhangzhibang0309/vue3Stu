<template>
    <div>
        About组件:{{ name }}--{{ age }}
        <button @click="increment">{{ counter }}</button>
    </div>
</template>

<script>
export default {
    name: "about-vue",
    props: {
        name: {
            type: String,
            default: ""
        },
        age: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        }
    },
    created() {
        console.log("created")
    },
    // 由于组件开启了缓存 所以在切换组件的时候 这个钩子并不会生效
    unmounted() {
        console.log("onUnmounted")
    },
    // 启用缓存的组件可以用下面的钩子函数
    activated() {
        console.log("activated")
    },
    deactivated() {
        console.log("deactivated")
    }
}
</script>

<style scoped>
</style>