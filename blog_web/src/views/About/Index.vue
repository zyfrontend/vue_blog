<template>
  <div class="about shadow">
    <mu-card class="about-content">
      <div class="top">
        <h1>关于我</h1>
        <div class="avatar"></div>
        <h2>FrontendZY</h2>
      </div>
      <div>
        <h3>🍀个人简介</h3>
        <div>
          <div class="icon">现居地: 深圳</div>
          <div class="icon">目标: 成为一名优秀的前端工程师</div>
        </div>
      </div>
      <div>
        <h3>🍀博客简介</h3>
        <div class="icon">全站HTTPS</div>
        <div class="icon">Vue框架+Muse-UI库</div>
        <!--        <div class="icon">-->
        <!--          本博客文章采用-->
        <!--          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a> 协议，转载请注明出处-->
        <!--        </div>-->
      </div>
      <div>
        <h3>🍀基础信息</h3>
        <div class="icon">
          <a href="https://github.com/zyfrontend">github: zyfrontend</a>
        </div>
      </div>
      <div>
        <h3>🍀掌握技能</h3>
        <div>
          <div class="icon">JavaScript</div>
          <div class="icon">HTML</div>
          <div class="icon">CSS</div>
          <div class="icon">Vue</div>
          <div class="icon">React</div>
          <div class="icon">Webpack</div>
          <div class="icon">Git</div>
        </div>
      </div>
      <div>
        <h3>🍀随笔</h3>
        “认真的生活，认真的做选择，并且为自己的选择负责，在自己擅长的领域努力的学习和工作，在自己的工作上尽可能的有所作为!!!”
      </div>
    </mu-card>
    <Footer v-if="isPC"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer,
  },
  mounted() {
    this.$store.commit('switchLight', 5)
  },
}
</script>

<style lang="less" scoped>
.about {
  margin: 80px 5%;
  .about-content {
    width: 100%;
    height: 100%;
    padding: 10px 10px;
    border-radius: 10px;
    .top {
      text-align: center;
    }
    .avatar {
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
      margin: 0 auto;
      background: url('https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png') center center
        no-repeat;
    }
  }
  .icon {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 40px;
    &::before {
      content: '';
      width: 16px;
      height: 16px;
      background: #00e676;
      border-radius: 50%;
      position: absolute;
      left: -20px;
    }
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
      position: absolute;
      left: -17px;
    }
  }
}
</style>
