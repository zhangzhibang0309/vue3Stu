<template>
    <!-- 插槽是标签 -->
    <my-slot-cpn-vue>
        <button>我是slot</button>
    </my-slot-cpn-vue>

    <!-- 插槽是text -->
    <my-slot-cpn-vue>我是普通文字</my-slot-cpn-vue>

    <!-- 插槽是组件 -->
    <my-slot-cpn-vue>
        <my-button-vue></my-button-vue>
    </my-slot-cpn-vue>

    <!-- 使用默认插槽 -->
    <my-slot-cpn-vue></my-slot-cpn-vue>

    <!-- 插入了很多的内容 -->
    <my-slot-cpn-vue>
        <h2>我是哈哈哈</h2>
        <button>我是按钮</button>
        <strong>我很强壮</strong>
    </my-slot-cpn-vue>
</template>

<script>
import MySlotCpnVue from "./MySlotCpn.vue"
import MyButtonVue from "./MyButton.vue"

export default {
    components: {
        MySlotCpnVue,
        MyButtonVue
    }
}
</script>

<style scoped>
</style>