<template>
    <div class="nav-bar">
        <!-- 如果没有name属性的化 默认有一个default -->
        <!-- <slot name="default"></slot> -->
        <div class="left">
            <slot name="left"></slot>
        </div>

        <div class="center">
            <slot name="center"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>

        <!--  -->
        <div class="addition">
            <slot :name="name"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    },
}
</script>

<style scoped>
.nav-bar {
    display: flex;
}

.left,
.center,
.right {
    height: 44px;
}

.left,
.right,
.addition {
    width: 80px;
    background-color: red;
}
.center {
    flex: 1;
    background-color: blue;
}
</style>