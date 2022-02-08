<template>
    <button @click="btnClick">按钮点击</button>
</template>

<script>
import emitter from "./utils/eventbus"


export default {

    methods: {
        btnClick() {
            console.log("about按钮的点击")
            emitter.emit("emit1", { name: "zzb", age: 18 })
            // emitter.emit("emit2", { name: "kobe", age: 33 })
        }
    },
}
</script>

<style scoped>
</style>