<template>
  <div>
    <h2>Home组件</h2>
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
  emits: ['btnClick'],
  methods: {
    homeClick() {
      this.$emit('btnClick', 'home')
    },
  },
})
</script>

<style scoped></style>
