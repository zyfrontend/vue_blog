<template>
  <div
    class="background"
    :style="{
      background: `url('${bgUrl}') center center/cover no-repeat`,
    }"
  ></div>
</template>
<!--

-->
<script>
import { bgUrl } from '@/config'
export default {
  data() {
    return {
      bgUrl,
    }
  },
  components: {},
}
</script>
<style lang="less" scoped>
.background {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
