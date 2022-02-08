<template>
    <nav-bar-vue :name="name">
        <template v-slot:left>
            <button>左边的按钮</button>
        </template>
        <!-- v-slot可以缩写为# -->
        <template #center>
            <h3>我是标题</h3>
        </template>

        <template #right>
            <i>右边的i元素</i>
        </template>

        <template #[name]>
            <i>{{ name }}的slot</i>
        </template>
    </nav-bar-vue>
</template>

<script>
import NavBarVue from "./NavBar.vue"

export default {
    components: {
        NavBarVue
    },
    data() {
        return {
            name: "why"
        }
    },
}
</script>

<style scoped>
</style>