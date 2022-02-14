<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>

        <transition name="zzb">
            <h2 v-if="isShow">Hello World</h2>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
.zzb-enter-from,
.zzb-leave-to {
    opacity: 0;
}

.zzb-enter-to,
.zzb-leave-from {
    opacity: 1;
}

.zzb-enter-active,
.zzb-leave-active {
    transition: opacity 2s ease;
}
</style>