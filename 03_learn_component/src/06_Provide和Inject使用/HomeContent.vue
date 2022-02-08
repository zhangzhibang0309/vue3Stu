<template>HomeContent: {{ name }} -- {{ age }} -- {{ length }}</template>

<script>
export default {
    inject: ["name", "age", "length"],
}
</script>

<style scoped>
</style>