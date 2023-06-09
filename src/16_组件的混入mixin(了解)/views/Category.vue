<template>
  <div>
    <h2>Category组件:{{ message }}</h2>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import messageMixin from '../mixins/message-mixin'
export default defineComponent({
  mixins: [messageMixin],
})
</script>

<style scoped></style>
