<template>
  <div>
    <h2>About组件</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: 'Jack',
    },
    age: {
      type: Number,
      default: 29,
    },
  },
  emits: ['aboutEmit'],
  methods: {
    aboutClick() {
      this.$emit('aboutEmit', 'about')
    },
  },
})
</script>

<style scoped></style>
