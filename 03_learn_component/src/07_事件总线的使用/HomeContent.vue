<template></template>

<script>
import emitter from "./utils/eventbus"


export default {
    created() {
        // emit1的监听
        const emit1Func = (info) => {
            console.log(info)
        }
        emitter.on("emit1", emit1Func)
        // emitter.off("emit1", emit1Func) // 取校emit1事件

        // emit2的监听
        const emit2Func = (info) => {
            console.log(info)
        }
        emitter.on("emit2", emit2Func)

        // 监听所有的事件
        emitter.on("*", (type,info) => {
            console.log("*",type,info)
        })

        // 清楚所有事件
        // emitter.all.clear()
    },
}
</script>

<style scoped>
</style>