<template>
  <h2>counter:{{ modelValue }}</h2>
  <button @click="changeCounter">子组件修改数据</button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits:['update:modelValue'],
  methods: {
    changeCounter() {
      this.$emit('update:modelValue',999)
    }
  }
})
</script>

<style scoped></style>
