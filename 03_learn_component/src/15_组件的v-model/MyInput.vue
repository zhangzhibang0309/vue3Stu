<template>
    <div>
        <input type="text" v-model="value" />
        {{ modelValue }}
        <input type="text" v-model="zzb" />
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
        title: String
    },
    emit: ["update:modelValue", "update:title"],
    computed: {
        value: {
            set(value) {
                this.$emit("update:modelValue", value)
            },
            get() {
                return this.modelValue
            }
        },
        zzb: {
            set(zzb) {
                this.$emit("update:title", zzb)
            },
            get() {
                return this.title
            }
        }
    },
}
</script>

<style scoped>
</style>