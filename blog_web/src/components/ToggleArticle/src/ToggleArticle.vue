<template>
  <div class="toggle-article">
    <img src="http://zyfullstack.top/img/202201191047032.jpg" alt="" />
    <div class="toggle-info">
      <div class="toggle-title">上一篇</div>
      <div class="article-title">Helloword</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.toggle-article {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  &:hover img {
    transform: scale(1.2);
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.7s;
  }
  .toggle-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    color: white;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
