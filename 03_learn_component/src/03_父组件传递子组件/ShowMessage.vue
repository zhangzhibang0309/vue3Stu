<template>
    <div>
        <!-- 分开绑定 -->
        <h2 :id="$attrs.id" :class="$attrs.class" style="color: aquamarine;">{{ title }}</h2>
        <!-- 直接绑定 -->
        <h2 v-bind="$attrs" style="color: pink;">{{ content }}</h2>
        <h2 style="color: cornflowerblue">{{ counter }}</h2>
        <h2 style="color: black">{{ messageInfo }}</h2>
    </div>
</template>

<script>
export default {
    // 正常来说 非props的attribute会被绑定到root上 如果设置了下面这个属性 就不会了,然后再根据需求手动绑定到下面的标签上
    inheritAttrs: false,
    // 用数组没法指定参数数据类型
    // props: [
    //     "title",
    //     "content"
    // ]

    // 对象方式
    props: {
        title: [String, Number],
        content: {
            type: String,
            required: true, // 必传
            default: "default" // 默认值
        },
        counter: Number,
        info: {
            type: Object,
            // 这样的化 所有组件对info的引用指向的都是同一个地址
            // default: {
            //     name: "zzb"
            // },
            // 写成工厂函数就好了
            default() {
                return {
                    name: "zzb"
                }
            },
        },
        // 这种情况下 在html中传值的时候 要改成-连接 如message-info 因为html大小写不敏感
        // 但是在.vue文件下是不会有问题的
        messageInfo: {
            type: String,
            // 还可以自定义验证函数
            validator(value) {
                return ["success", "warning", "danger"].includes(value)
            }
        }
    }
}
</script>

<style scoped>
</style>