<template>
  <div class="home-banner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    bannerBtnClick() {
      console.log('banner click')
    }
  }
})
</script>

<style scoped></style>
