<template>
  <div class="info">
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>身高:{{ height }}</h2>
    <h2 :class="$attrs.class" >小驼峰:{{showMessage}}</h2>
  </div>
  <div class="others" v-bind="$attrs"></div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  // inheritAttrs:false,
  // 数组写法
  // props: ['name', 'age', 'height'],

  // 一般采用对象语法
  props: {
    name: {
      type: String,
      default: '我是默认name',
    },
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      default: 2,
    },
    friend: {
      type: Object,
      default() {
        return { name: 'james' }
      },
    },
    hobbies: {
      type: Array,
      default: () => ['sing', 'rap'],
    },
    showMessage: {
      type: String,
      default: '小驼峰',
    },
  },
  data() {
    return {
      // name: "Jack",
      // age: 33,
      // height:1.78
    }
  },
})
</script>

<style scoped></style>
