<template>
  <h2>counter:{{ counter }}</h2>
  <button @click="changeCounter">子组件修改数据</button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
  emits:['update:counter'],
  methods: {
    changeCounter() {
      this.$emit('update:counter',999)
    }
  }
})
</script>

<style scoped></style>
