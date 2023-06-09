<template>
  <!-- v-model默认绑定是modelValue -->
  <!-- <counter v-model="appCounter"></counter> -->
  <!-- 等价写法如下: -->
  <!-- <counter :modelValue="appCounter" @update:modelValue="appCounter=$event"></counter> -->


  <counter2 v-model:counter="appCounter"></counter2>
</template>

<script>
import { defineComponent } from 'vue'
import Counter from './Counter.vue'
import Counter2 from './Counter2.vue'
export default defineComponent({
  components: {
    Counter,
    Counter2,

  },
  data() {
    return {
      appCounter: 100,
    }
  },
})
</script>

<style scoped></style>
