<template>
  <div>
    <h2>Category组件</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'category',
  unmounted() {
    console.log('Category component is unmounted')
  },
})
</script>

<style scoped></style>
