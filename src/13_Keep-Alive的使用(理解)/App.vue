<template>
  <div class="app">
    <template v-for="item in tabs" :key="item">
      <button :class="{ active: currentTab === item }" @click="btnClick(item)">
        {{ item }}
      </button>
    </template>
  </div>

  <!-- 方案2: 利用动态组件component-->
  <div class="view">
    <KeepAlive include="home,about">
      <component :is="currentTab"></component>
    </KeepAlive>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'
export default defineComponent({
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home',
    }
  },
  methods: {
    btnClick(tab) {
      this.currentTab = tab
    },
    rootClick(payload) {
      console.log('rootClick', payload)
    },
    aboutMethod(payload) {
      console.log('aboutMethod', payload)
    },
  },
})
</script>

<style scoped>
.active {
  color: red;
}
</style>
