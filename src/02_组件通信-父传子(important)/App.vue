<template>
<show-info name="Rose" :age='18' :height='1.88' show-message="show-message" address="上海市" class="active"></show-info>
<!-- <show-info :age='15' /> -->
</template>

<script>
import ShowInfo from './ShowInfo'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    ShowInfo
  }
})
</script>

<style scoped>

</style>
