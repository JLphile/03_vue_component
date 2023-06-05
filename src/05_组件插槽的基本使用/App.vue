<template>
  <div class="app">
    <show-message title="标题" content="我是内容">
      <button>我是按钮替换插槽</button>
    </show-message>
    <show-message>
      <a href="#">百度一下</a>
    </show-message>

    <show-message>
      <img src="@/images/OIP-C.jpeg" alt="">
    </show-message>
    <show-message></show-message>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ShowMessage from './ShowMessage.vue';
export default defineComponent({
  components: {
    ShowMessage,
  },
})
</script>

<style scoped></style>
