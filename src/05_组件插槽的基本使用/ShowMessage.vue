<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>我是插槽默认内容</slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'title默认值',
    },
    content: {
      type: String,
      default: 'content默认值',
    },
  },
})
</script>

<style scoped></style>
