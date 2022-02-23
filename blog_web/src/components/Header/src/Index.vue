<template>
  <div class="header">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  name: 'Header',
  components: {
    NavBar,
  },
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1501;
  width: 100%;
}
</style>
