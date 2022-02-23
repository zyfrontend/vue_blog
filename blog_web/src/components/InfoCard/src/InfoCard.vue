<template>
  <mu-card class="info-card">
    <div class="avatar">
      <img src="https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png" alt="" />
    </div>
    <div class="nick-name">FrontendZY</div>
    <div class="user-desc">一个收藏回忆与分享技术的地方！</div>
    <div class="blog-info">
      <div class="count">
        <div class="name">文章</div>
        <div class="count-num">111</div>
      </div>
      <div class="count">
        <div class="name">分类</div>
        <div class="count-num">111</div>
      </div>
      <div class="count">
        <div class="name">标签</div>
        <div class="count-num">111</div>
      </div>
    </div>
    <div class="contact-information">
      <mu-button icon>
        <!--        <mu-icon size="36" value=":mudocs-icon-custom-github"></mu-icon>-->
        <i class="fab fa-github"></i>
      </mu-button>
    </div>
  </mu-card>
</template>

<style lang="less" scoped>
.info-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    &:hover img {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
    }
    img {
      width: 100%;
      transition: All 0.4s ease-in-out;
    }
  }
  .nick-name {
    font-size: 18px;
    margin-top: 15px;
  }
  .blog-info {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    .count {
      cursor: pointer;
      text-align: center;
      padding: 0 5px;
      .name {
        color: rgba(0, 0, 20, 0.9);
      }
      .count-num {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>
