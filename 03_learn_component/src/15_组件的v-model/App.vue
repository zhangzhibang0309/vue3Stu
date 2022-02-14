<template>
    <div>
        <!-- <input type="text" v-model="message" /> -->
        <!-- 相当于 -->
        <!-- <input type="text" :value="message" @input="message = $event.target.value" /> -->
        <!-- <h2>{{ message }}</h2> -->

        <!-- 组件上使用v-model -->
        <!-- <my-input v-model="message"></my-input> -->
        <!-- 相当于 -->
        <!-- <my-input :modelValue="message" @update:model-value="$event"></my-input> -->
        <!-- 绑定两个v-model -->
        <my-input v-model="message" v-model:title="title"></my-input>
    </div>
</template>

<script>
import MyInput from "./MyInput.vue"

export default {
    components: {
        MyInput
    },
    data() {
        return {
            message: "hello world",
            title:  "App"
        }
    },
}
</script>

<style scoped>
</style>