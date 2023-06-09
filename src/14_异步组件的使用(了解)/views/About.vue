<template>
  <div class="about">
    <h2>About组件</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'about',
  unmounted() {
    console.log('About component is unmounted')
  },
})
</script>

<style scoped></style>
