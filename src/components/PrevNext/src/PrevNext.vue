<template>
  <div class="prev-next">
    <mu-button v-if="prev" flat color="primary">上一篇{{prev.title}}</mu-button>
    <mu-button v-if="next" flat color="info">下一篇{{next.title}}</mu-button>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object
    },
    next: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped> 
.prev-next {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.24rem;
}
</style>