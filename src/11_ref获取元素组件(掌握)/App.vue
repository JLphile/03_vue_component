<template>
  <h2 ref="title">{{ message }}</h2>
  <button @click="changeTitle">click me!</button>

  <Banner ref="banner" />
</template>

<script>
import { defineComponent } from 'vue'
import Banner from './Banner.vue'
export default defineComponent({
  components: {
    Banner,
  },
  data() {
    return {
      message: '通过$refs 获取元素',
    }
  },
  methods: {
    changeTitle() {
      // 尽管有效,但是不应该这样操作
      console.dir(this.$refs.title)
      // this.$refs.title.innerHTML = 'Hi'
      console.log(this.$refs.banner)
      this.$refs.banner.bannerClick()

      console.log(this.$refs.banner.$el)
    },
  },
})
</script>

<style scoped></style>
