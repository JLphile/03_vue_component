<template>
<div class="nav-bar">
  <div class="left">
    <slot name="left">left</slot>
  </div>
  <div class="center">
    <slot name="center">center</slot>
  </div>
  <div class="right">
    <slot name="right">right</slot>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left{
  width: 80px;
  background-color: #1ABC9C;
}
.center{
  flex: 1;
  background-color: #2ECC71;
}
.right{
  width: 80px;
  background-color: #3498DB;
}
</style>
