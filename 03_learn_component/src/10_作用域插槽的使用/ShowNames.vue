<template>
    <div>
        <template v-for="(item, index) in names" :key="item">
            <slot :item="item" :index="index"></slot>
            <slot name="slot1" :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        names: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
</style>