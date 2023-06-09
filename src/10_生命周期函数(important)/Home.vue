<template>
  <h2>Home组件</h2>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created', '组件被创建完成')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },

  beforeUnmount() {
    console.log('Home beforeUnmount')
  },
  unmounted() {
    console.log('Home unmounted')
  },
})
</script>

<style scoped></style>
