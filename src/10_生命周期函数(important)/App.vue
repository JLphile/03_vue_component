<template>
  <h2>{{ counter }}</h2>
  <button @click="counter++">click me!</button>
  <button @click="isShow = !isShow">unmounted Home</button>
  <Home v-if="isShow"></Home>
</template>

<script>
import { defineComponent, onBeforeUnmount } from 'vue'
import Home from './Home.vue'
export default defineComponent({
  components: { Home },
  data() {
    return {
      counter: 0,
      isShow: true,
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  // 2.组件被创建完成
  created() {
    console.log('created', '组件被创建完成')
    console.log('created', '1.发送网络请求,请求数据')
    console.log('created', '2.监听eventBus事件')
    console.log('created', '3.监听watch数据')
  },
  // 3.组件template准备被挂载
  beforeMount() {
    console.log('beforeMount')
  },
  // 4.组件template被挂载:虚拟DOM->真实DOM

  mounted() {
    console.log('mounted')
    console.log('mounted', '1.获取dom')
    console.log('mounted', '2.操作dom')
  },
  // 5.数据发生改变
  // 5.1 准备更新DOM
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  // 更新DOM
  updated() {
    console.log('updated')
  },
  // 6 卸载VNode->DOM元素
  // 6.1 卸载前
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  // 6.2 DOM 元素被卸载完成
  unmounted() {
    console.log('unmounted')
  },
})
</script>

<style scoped></style>
