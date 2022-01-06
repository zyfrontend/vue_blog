<template>
  <!-- <canvas class="index-canvas" ref="canvas"></canvas>
   -->
  <div class="index-canvas">
  </div>
</template>

<script>
// import { index_fullScreenAnimation } from '@/utils'
export default {
  name: 'IndexAnimation'
}
</script>

<style lang="less" scoped>
.index-canvas {
  background-image: url("../../../assets/img/bg.jpg");
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
