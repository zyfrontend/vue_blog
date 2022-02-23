<template>
  <div class="not-fount">
    <div class="content">
      <div class="left"></div>
      <div class="right">
        <div class="top-text">404</div>
        <div class="bottom-text">Page NotFount</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.not-fount {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .content {
    width: 700px;
    height: 300px;
    background: white;
    display: flex;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    .left {
      flex: 5;
      background: #00e676;
    }
    .right {
      flex: 5;
      text-align: center;
      padding-top: 20px;
      .top-text {
        font-size: 5rem;
      }
    }
  }
}
</style>
