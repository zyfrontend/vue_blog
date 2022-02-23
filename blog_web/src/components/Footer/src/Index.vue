<template>
  <div class="footer">
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import CopyRight from './CopyRight.vue'
export default {
  components: {
    CopyRight,
  },
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}
</style>
