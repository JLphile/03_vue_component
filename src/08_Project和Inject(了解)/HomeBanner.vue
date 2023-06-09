<template>
  <div class="home-banner">home-banner:{{ name }}-{{ age }}-{{ message }}</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  inject: ['name', 'age','message'],
})
</script>

<style scoped></style>
