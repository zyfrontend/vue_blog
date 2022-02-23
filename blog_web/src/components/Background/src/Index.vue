<template>
  <div
    class="background"
    :style="{
      background: `url('${bgUrl}') center center/cover no-repeat`,
    }"
  >
    <TypeWrite></TypeWrite>
  </div>
</template>
<script>
import { bgUrl } from '@/config'
import TypeWrite from './TypeWrite.vue'
export default {
  data() {
    return {
      bgUrl,
    }
  },
  components: {
    TypeWrite,
  },
}
</script>
<style lang="less" scoped>
.background {
  position: absolute;
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
