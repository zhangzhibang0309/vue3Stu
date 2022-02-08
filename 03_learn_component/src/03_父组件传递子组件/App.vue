<template>
    <!-- 直接传 -->
    <!-- id和class属于非props的attribute -->
    <show-message-vue
        id="msg1"
        class="msg"
        :title="title"
        :content="content"
        :counter="counter"
        :message-info="messageInfo"
    ></show-message-vue>
    <!-- 绑定对象属性 -->
    <show-message-vue :title="message.title" :content="message.content"></show-message-vue>
    <!-- 直接绑定对象 -->
    <show-message-vue v-bind="message"></show-message-vue>

    <multi-root-element-vue id="multi"></multi-root-element-vue>
</template>

<script>
import ShowMessageVue from "./ShowMessage.vue"
import MultiRootElementVue from "./MultiRootElement.vue"

export default {
    components: {
        ShowMessageVue,
        MultiRootElementVue
    },
    data() {
        return {
            title: "Title",
            content: "Content",
            counter: 69,
            messageInfo: "success",
            message: {
                title: "message.Title",
                content: "message.Content",
                counter: 69,
            }
        }
    },
}
</script>

<style scoped>
</style>