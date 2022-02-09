<template>
    <div>
        <!-- 演示编译作用域问题 -->
        <!-- 想在父组件中访问子组件的数据这样直接访问是不行的 -->
        <!-- 这种情况就要用到作用域插件 -->
        <!-- <child-cpn-vue>
            <button>{{ title }}</button>
        </child-cpn-vue>-->

        <!-- 作用域插槽使用 -->
        <show-names-vue :names="names">
            <template v-slot="slotProps">
                <button>{{ slotProps.item }} -- {{ slotProps.index }}</button>
            </template>
        </show-names-vue>

        <!-- 独占默认插槽缩写 -->
        <!-- 这种写法 就是当前这个组件里面只用了一个默认插槽 妹用其他具名插槽 如果像下面这样 用了其他named slot 就会报错-->
        <show-names-vue :names="names" v-slot="slotProps">
            <i>{{ slotProps.item }} -- {{ slotProps.index }}</i>

            <!-- <template v-slot:slot1>
                <i>iiiiiiiiii</i>
            </template>-->
        </show-names-vue>

        <!-- 作用域插槽和具名插槽联合使用 -->
        <show-names-vue :names="names">
            <template v-slot:slot1="slotProps">
                <strong>{{ slotProps.item }} -- {{ slotProps.index }}</strong>
            </template>
        </show-names-vue>
    </div>
</template>

<script>
import ChildCpnVue from "./ChildCpn.vue"
import ShowNamesVue from "./ShowNames.vue"

export default {
    components: {
        ChildCpnVue,
        ShowNamesVue
    },
    data() {
        return {
            names: ["zzb", "kobe", "james", "curry"]
        }
    },
}
</script>

<style scoped>
</style>