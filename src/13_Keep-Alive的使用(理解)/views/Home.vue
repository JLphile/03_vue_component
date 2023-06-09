<template>
  <div>
    <h2>Home组件</h2>
    <h2>当前计数:{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'home',
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    console.log('Home component is created')
  },
  unmounted() {
    console.log('Home component is unmounted')
  },
  activated() {
    console.log('Home component is activated')
  },
  deactivated() {
    console.log('Home component is deactivated')
  }
})
</script>

<style scoped></style>
