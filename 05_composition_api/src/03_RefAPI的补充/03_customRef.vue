<template>
  <div>
    <input v-model="message" />
    {{message}}
  </div>
</template>

<script>
import useDebounceRef from "./hook/useDebounceRef"

export default {
  setup() {
    const message = useDebounceRef("Hello World");

    return {
      message,
    };
  },
};
</script>

<style scoped></style>
