<template>
  <div class="not-found">
    <div class="text">404</div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 2rem;
  }
}
</style>