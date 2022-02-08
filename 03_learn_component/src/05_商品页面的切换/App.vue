<template>
    <tab-control-vue :titles="titles" @titleClick="titleClick"></tab-control-vue>
    <h2>{{ contents[currentIndex] }}</h2>
</template>

<script>
import TabControlVue from "./TabControl.vue"

export default {
    components: {
        TabControlVue
    },
    data() {
        return {
            titles: ["衣服", "鞋子", "裤子"],
            contents: ["衣服页面", "鞋子页面", "裤子页面"],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index
        }
    },
}
</script>

<style scoped>
</style>