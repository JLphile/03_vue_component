<template>
  <div class="home">
    <home-banner></home-banner>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HomeBanner from './HomeBanner.vue'
export default defineComponent({
  components: {
    HomeBanner,
  },
})
</script>

<style scoped></style>
