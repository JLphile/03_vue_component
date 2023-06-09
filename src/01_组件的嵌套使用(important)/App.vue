<template>
  <div>App</div>
  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import AppFooter from './components/AppFooter.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
})
</script>

<style scoped></style>
