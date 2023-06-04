<template>
<div class="content">
  <div class="banner">
    <app-content-list></app-content-list>
  </div>
</div>
</template>

<script>
import AppContentList from './AppContentList.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    AppContentList
  }
  
})
</script>

<style scoped>
.content{
  background-color: red;
}
</style>
