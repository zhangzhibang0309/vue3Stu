<template>
    <div>
        App组件
        <home></home>
        <suspense>
            <template #default>
                <async-category></async-category>
            </template>
            <template #fallback>
                <async-category></async-category>
            </template>
        </suspense>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue"

import Home from "./Home.vue"
import Loading from "./Loading.vue"

// import AsyncCategory from "./AsyncCategory.vue"
// 以下是导入异步组件 可以将组件进行分包打包

// 简洁的方式 也是用的比较多的方式
const AsyncCategory = defineAsyncComponent(() => { import("./AsyncCategory.vue") })

// 下面这种方式用的少 对象方式 可以配置很多东西
// const AsyncCategory = defineAsyncComponent({
//     loader: () => import("./AsyncCategory.vue"),
//     loadingComponent: Loading, //加载过程中占位的组件
//     // errorComponent, // 加载失败展示的组件
//     delay: 2000, // 在显示Loading组件之前等多久
//     /**
//      * 
//      * @param {*} err 错误信息
//      * @param {*} retry 函数,调用retry尝试重新加载
//      * @param {*} fail 一个函数,指示加载程序结束退出
//      * @param {*} attempts 记录尝试的次数
//      */
//     onError: function (err, retry, fail, attempts) {

//     }
// })

export default {
    components: {
        Home,
        AsyncCategory
    }
}
</script>

<style scoped>
</style>