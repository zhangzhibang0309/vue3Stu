<template>
    <home-vue></home-vue>
    <button @click="addName">+name</button>
    {{ names }}
</template>

<script>
import HomeVue from "./Home.vue"
import { computed } from "vue"

export default {
    components: {
        HomeVue
    },
    // 方式一: 使用provide/inject 这种方式只能在有祖父子关系的组件之间使用
    provide() {
        return {
            name: "zzb",
            age: 18,
            length: computed(() => this.names.length)
        }
    },
    data() {
        return {
            names: ["abc", "qwe", "asd"]
        }
    },
    methods: {
        addName() {
            this.names.push("zzb")
        }
    },
 
}
</script>

<style scoped>
</style>