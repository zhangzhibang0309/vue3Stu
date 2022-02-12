<template>
    <div>
        About组件:{{ name }}--{{ age }}
        <button @click="increment">{{ counter }}</button>
    </div>
</template>

<script>
export default {
    name:"about-vue",
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
}
</script>

<style scoped>
</style>