<template>
  <nav-bar>
    <template #left>
      <button>{{leftText}}</button>
    </template>
    <template v-slot:center>
      <span>内容</span>
    </template>
    <template v-slot:right>
      <a href="#">登录</a>
    </template>
  </nav-bar>

  <nav-bar>
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
  </nav-bar>

  <button @click="position = 'left'">left</button>
  <button @click="position = 'center'">center</button>
  <button @click="position = 'right'">right</button>
</template>

<script>
import { defineComponent } from 'vue'

import NavBar from './Navbar.vue'
export default defineComponent({
  components: {
    NavBar,
  },
  data() {
    return {
      position: 'center',
      leftText:'返回'
    }
  },
})
</script>

<style scoped></style>
