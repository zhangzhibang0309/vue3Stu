<template>
    <div>
        <!-- 默认绑定和事件处理 -->
        <button @click="btnClick">myinput按钮</button>
        <h2>myinput的message：{{ modelValue }}</h2>

        <!-- 通过input -->
        <input type="text" :value="modelValue" @input="btnClick" />

        <!-- 绑定到props中是不对的 -->
        <input type="text" v-model="modelValue" />

        <!-- 使用计算属性 -->
        <input type="text" v-model="value" />

    </div>
</template>

<script>
export default {
    props: {
        modelValue: String
    },
    emit: ["update:modelValue"],
    data() {
        return {

        }
    },
    computed: {
        value: {
            set(value) {
                this.$emit("update:modelValue", value)
            },
            get() {
                return this.modelValue
            }
        }
    },
    methods: {
        btnClick(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    },
}
</script>

<style scoped>
</style>