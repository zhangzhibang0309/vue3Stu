<template>
    <h2>{{ counter }}</h2>
    <counter-operation-vue @add="addOne" @sub="subOne" @addN="addNNum" ></counter-operation-vue>
</template>

<script>
import CounterOperationVue from "./CounterOperation.vue"

export default {
    components: {
        CounterOperationVue
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addOne() {
            this.counter++
        },
        subOne() {
            this.counter--
        },
        addNNum(num, name, age) {
            console.log(name, age)
            this.counter += num
        }
    },
}
</script>

<style scoped>
</style>