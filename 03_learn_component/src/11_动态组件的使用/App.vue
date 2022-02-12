<template>
    <div>
        <button
            v-for="
        item in tabs"
            :key="item"
            @click="itemClick(item)"
            :class="{ active: currentTab === item }"
        >{{ item }}</button>

        <!-- v-if判断实现 -->
        <!-- <template v-if="currentTab === 'home'">
            <home-vue></home-vue>
        </template>
        <template v-if="currentTab === 'about'">
            <about-vue></about-vue>
        </template>
        <template v-if="currentTab === 'category'">
            <category-vue></category-vue>
        </template>-->

        <!-- 动态组件实现 -->
        <!-- 这里还有exclude(设置哪些不做缓存)和max(设置最多缓存组件数--最近最久未使用会被拿出)属性 -->
        <keep-alive include="about-vue">
            <component :is="currentTab" name="zzb" :age="18" @pageClick="pageClick"></component>
        </keep-alive>
    </div>
</template>

<script>
import HomeVue from "./pages/Home.vue"
import AboutVue from "./pages/About.vue"
import CategoryVue from "./pages/Category.vue"

export default {
    components: {
        HomeVue,
        AboutVue,
        CategoryVue
    },
    data() {
        return {
            tabs: ["home-vue", "about-vue", "category-vue"],
            currentTab: "home-vue"
        }
    },
    methods: {
        itemClick(item) {
            this.currentTab = item
        },
        pageClick() {
            console.log("pageClick点击")
        }
    },
}
</script>

<style scoped>
.active {
    color: red;
}
</style>