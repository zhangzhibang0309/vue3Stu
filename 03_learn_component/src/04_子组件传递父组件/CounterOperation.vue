<template>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num" />
    <button @click="incrementN">+N</button>
</template>

<script>
export default {
    // emit: ["add", "sub","addN"],
    // 对象写法的目的是为了进行参数的验证
    emits: {
        add: null,
        sub: null,
        addN: (num, name, age) => {
            if (num > 10) return true
            return false
        }
    },
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment() {
            console.log("+1")
            this.$emit("add")
        },
        decrement() {
            console.log("-1")
            this.$emit("sub")
        },
        incrementN() {
            console.log("+N")
            this.$emit("addN", this.num, "zzb", 18)
        }
    },
}
</script>

<style scoped>
</style>