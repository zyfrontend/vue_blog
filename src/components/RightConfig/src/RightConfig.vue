<template>
  <div class="right-config">
    <mu-card class="slider-card">
      <mu-avatar class="avatar" size="100">
        <img v-lazy="avatar" alt="" />
      </mu-avatar>
      <div class="title">FrontendZY</div>
      <div class="desc">专注web移动端开发</div>
      <div class="tags">
        <mu-chip class="chip">Vue</mu-chip>
        <mu-chip class="chip">React</mu-chip>
        <mu-chip class="chip">Nodejs</mu-chip>
      </div>
      <!-- 友链 -->
      <div class="friend-link-box">
        <p class="friend-link-title">友情链接</p>
        <div class="friend-links">
          <mu-button small fab>
            <mu-avatar size="40">
              <img
                src="https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201111347823.png"
                alt=""
              />
            </mu-avatar>
          </mu-button>
          <mu-button small fab>
            <mu-avatar size="40">
              <img
                src="https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201111347823.png"
                alt=""
              />
            </mu-avatar>
          </mu-button>
          <mu-button small fab>
            <mu-avatar size="40">
              <img
                src="https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201111347823.png"
                alt=""
              />
            </mu-avatar>
          </mu-button>
        </div>
      </div>
    </mu-card>
    <!-- 广告 -->
    <!-- <mu-card class="slider-card card-ad">
      <div class="ad">广告</div>
      <mu-carousel style="height: 120px" hide-controls>
        <mu-carousel-item>
          <img style="width: 100%; cursir: pointer" src="" alt="" />
        </mu-carousel-item>
      </mu-carousel>
    </mu-card> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.right-config {
  width: 2.5rem;
}
.slider-card {
  position: relative;
  margin-top: 48px;
  text-align: center;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
  .avatar {
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }
  .title {
    font-size: 20px;
    color: #00e676;
  }
  .desc {
    font-size: 14px;
    margin: 10px 0;
  }
  .tags {
    .chip {
      margin: 0 10px 10px 0;
    }
  }
  .friend-link-box {
    .friend-link-title {
      position: relative;
      &::before {
        content: "";
        width: 30%;
        height: 1px;
        background: #ccc;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        content: "";
        width: 30%;
        height: 1px;
        background: #ccc;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .friend-links {
      display: flex;
      justify-content: space-around;
    }
  }
}
.card-ad {
  padding: 8px;
}
.ad {
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 8px;
  font-size: 12px;
}
</style>