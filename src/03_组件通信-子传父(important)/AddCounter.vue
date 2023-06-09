<template>
  <div class="add">
    <button @click="addClick(1)">+1</button>
    <button @click="addClick(5)">+5</button>
    <button @click="addClick(10)">+10</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  emits:['add'],
  methods: {
    addClick(count) {
      this.$emit('add',count)
    }
  }
})
</script>

<style scoped></style>
