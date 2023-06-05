<template>
  <div class="app">
    <tab-control :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick"></tab-control>

    <tab-control :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick">
      <!-- props可以改;v-slot:default='props' 可以改写成 v-slot='props' -->
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    <tab-control :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </tab-control>

    <h2>{{ pageContents[currentIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    TabControl,
  },
  data() {
    return {
      pageContents: ['衣服列表', '鞋子列表', '裤子列表'],
      currentIndex: 0,
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
    },
  },
})
</script>

<style scoped></style>
