<template>
    <!-- main -->
    <div class="main">
        <main-banner-vue></main-banner-vue>
        <main-product-list-vue></main-product-list-vue>
    </div>
</template>

<script>
import MainBannerVue from "./MainBanner.vue"
import MainProductListVue from "./MainProductList.vue"

export default {
    components: {
        MainBannerVue,
        MainProductListVue
    }
}
</script>

<style scoped>
</style>