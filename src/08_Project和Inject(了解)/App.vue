<template>
  <div class="app"></div>
  <Home></Home>
  <h2>{{ message }}</h2>
  <button @click="message = 'Hello World'">change message</button>
</template>

<script>
import { computed } from 'vue'
import { defineComponent } from 'vue'
import Home from './Home.vue'
export default defineComponent({
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello App Provide',
    }
  },
  provide() {
    return {
      name: 'Rose',
      age: 18,
      message: computed(() => this.message),
    }
  },
})
</script>

<style scoped></style>
