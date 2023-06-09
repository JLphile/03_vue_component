<template>
  <h2>当前计数:{{ counter }}</h2>
  <AddCounter @add="addBtnClick"></AddCounter>
  <SubCounter @sub="subBtnClick"></SubCounter>
</template>

<script>
import AddCounter from './AddCounter.vue'
import SubCounter from './SubCounter.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    AddCounter,
    SubCounter,
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addBtnClick(count) {
      this.counter += count
    },
    subBtnClick(count) {
      this.counter -= count
    },
  },
})
</script>

<style scoped></style>
