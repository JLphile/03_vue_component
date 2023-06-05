<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles">
      <div class="tab-control-item" @click="itemClick(index)" :class="{ active: index === currentIndex }">
        <slot :item="item">
        <span>{{ item }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  emits: ['tabItemClick'],
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabItemClick', index)
    },
  },
})
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
  cursor: pointer;
}
.tab-control .active {
  color: red;
  font-weight: 700;
}
.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 8px;
}
</style>
