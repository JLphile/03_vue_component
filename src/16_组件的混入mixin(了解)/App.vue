<template>
  <div class="app">
    <home></home>
    <about></about>
    <category></category>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'
export default defineComponent({
  components: {
    Home,
    About,
    Category,
  },
})
</script>

<style scoped></style>
