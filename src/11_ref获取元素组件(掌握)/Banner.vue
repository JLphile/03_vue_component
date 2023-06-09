<template>
  <div class="banner">
    <h2>Banner</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    bannerClick() {
      console.log('banner click')
    }
  }
})
</script>

<style scoped></style>
