<template>
  <div class="app">
    <template v-for="item in tabs" :key="item">
      <button :class="{ active: currentTab === item }" @click="btnClick(item)">
        {{ item }}
      </button>
    </template>
  </div>
  <!-- 方案1  -->
  <!-- <div class="view">
    <template v-if="currentIndex === 0">
      <Home></Home>
    </template>
    <template v-if="currentIndex === 1">
      <About></About>
    </template>
    <template v-if="currentIndex === 2">
      <Category></Category>
    </template>
  </div> -->
  <!-- 方案2: 利用动态组件component-->
  <div class="view">
    <component
      name="Rose"
      :age="18"
      :is="currentTab"
      @btnClick="rootClick"
      @aboutEmit="aboutMethod"
    ></component>
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
