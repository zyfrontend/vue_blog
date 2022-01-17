<template>
  <div class="header">
    <mu-appbar :color="backgroundIndex" :z-depth="5">
      <!-- 暱称 -->
      <span style="cursor: pointer">ZY'sBlog</span>

      <!-- 头像 -->
      <!-- <mu-avatar slot="left" :size="50" class="header-avatar">
        <img
          src="https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201041913107.png"
          alt=""
        />
      </mu-avatar> -->
      <!-- PC端 -->
      <mu-button
        flat
        slot="right"
        v-for="(item, index) in info.menu"
        :key="item.name"
        :color="lightIndex === index ? '#00e676' : ''"
        v-show="isPC"
        @click="go(item)"
      >
        <mu-icon size="16" :value="item.icon"></mu-icon>
        {{ item.name }}
      </mu-button>

      <!-- 移动端 -->
      <mu-button
        v-show="!isPC"
        flat
        slot="left"
        icon
        @click="toogleWapMenu(true)"
      >
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-bottom-sheet :open.sync="openWapMenu">
        <mu-list @item-click="toogleWapMenu(false)">
          <mu-list-item
            button
            v-for="(item, index) in info.menu"
            :key="item.name"
            @click="go(item)"
          >
            <mu-list-item-action>
              <mu-icon
                :value="item.icon"
                :color="lightIndex === index ? '#00e676' : ''"
              >
              </mu-icon>
            </mu-list-item-action>
            <mu-list-item-title
              :style="{ color: lightIndex === index ? '#00e676' : '' }"
            >
              {{ item.name }}
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>

      <!-- 主题切换 -->
      <mu-button flat slot="right" ref="theme" @click="openTheme = !openTheme">
        <mu-icon value="color_lens"></mu-icon>
      </mu-button>
      <mu-popover :open.sync="openTheme" :trigger="triggerTheme">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>Light</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Dark</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
      <!-- 用户 -->
      <mu-button flat slot="right" ref="user" @click="openUser = !openUser">
        <div class="user">
          <span>name11111</span>
          <mu-icon value="expand_more"></mu-icon>
        </div>
      </mu-button>
      <mu-popover :open.sync="openUser" :trigger="triggerUser">
        <mu-list>
          <mu-list-item button @click="$router.push({name: 'user'})">
            <mu-list-item-title>个人中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>退出</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </mu-appbar>
    <div class="tool">
      <div v-if="info.login && !user" class="tool-row">
        <mu-slide-left-transition>
          <mu-button @click="openLoginModal = true; showToolBtn = false" v-show="showToolBtn" fab color="primary">
            登录
          </mu-button>
        </mu-slide-left-transition>
      </div>
      <div class="tool-row">
        <mu-tooltip placement="right-start" content="登录/注册/搜索">
        <mu-button @click="showToolBtn = !showToolBtn" color="info" fab class="search-fab"><mu-icon value="adb"></mu-icon></mu-button>
        </mu-tooltip>
        <mu-slide-left-transition>
          <mu-button @click="openSearchModal = true; showToolBtn = false" v-show="showToolBtn && info.openSearch" fab color="error">
            搜索
          </mu-button>
        </mu-slide-left-transition>
      </div>
      <div v-if="info.register" class="tool-row">
        <mu-slide-left-transition>
          <mu-button @click="openRegisterModal = true; showToolBtn = false;" v-show="showToolBtn" fab color="warning">
            注册
          </mu-button>
        </mu-slide-left-transition>
      </div>
    </div>
    <RegisterForm :open="openRegisterModal" @toggle="toggleRegisterModel"></RegisterForm>
    <LoginForm :open="openLoginModal" @toggle="toggleLoginModel"></LoginForm>
    <SearchForm :open="openSearchModal" @toggle="toggleSearchModel"></SearchForm>
    <mu-slide-bottom-transition>
      <mu-tooltip placement="top" content="top">
        <mu-button @click="scrollTop" v-show="showBackTop" class="back-top" fab color="secondary">
          <mu-icon value="arrow_upward"></mu-icon>
        </mu-button>
      </mu-tooltip>
    </mu-slide-bottom-transition>
  </div>
</template>

<script>
import { menus } from "@/config";
import RegisterForm from '@/components/RegisterFrom'
import LoginForm from '@/components/LoginForm'
import SearchForm from '@/components/SearchForm'
export default {
  props: {
    // 导航高亮
    lightIndex: {
      type: Number,
      default: 0,
    },
    backgroundIndex: {
      type: String,
    },
  },
  components: {
    RegisterForm,
    LoginForm,
    SearchForm
  },
  data() {
    return {
      showBackTop: false,
      info: {
        menu: menus,
        login: true,
        register: true,
        openSearch: true
      },
      openTheme: false,
      triggerTheme: null,
      openUser: false,
      triggerUser: null,
      openWapMenu: false,
      showToolBtn: false,
      user: JSON.parse(localStorage.getItem('user')),
      openRegisterModal: false,
      openLoginModal: false,
      openSearchModal: false
    };
  },
  mounted() {
    this.triggerTheme = this.$refs.theme.$el;
    this.triggerUser = this.$refs.user.$el;
    window.onscroll = () => {
      if(document.documentElement.scrollTop + document.body.scrollTop > 100){
        this.showBackTop = true
      }else {
        this.showBackTop = false
      }
    }
  },
  methods: {
    // 移动端 菜单开启关闭
    toogleWapMenu(bool) {
      this.openWapMenu = bool;
    },
    // 路由跳转
    go(item) {
      if (this.$route.name === item.router) {
        return;
      }
      this.$router.push({
        name: item.router,
      });
    },
  //  注册组件关闭
    toggleRegisterModel(bool){
        this.openRegisterModal = bool
    },
    toggleLoginModel(bool){
      this.openLoginModal = bool
    },
    toggleSearchModel(bool){
      this.openSearchModal = bool
    },
  //  返回顶部
    scrollTop(){
      document.body.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1501;
  width: 100%;
  .header-avatar {
    margin-left: 20px;
    cursor: pointer;
  }
  .mu-appbar {
    .mu-flat-button {
      flex: 1;
    }
    /deep/ .mu-appbar-right {
      flex: 1;
    }
  }
  .user {
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      display: block;
      width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: right;
    }
  }
  .tool {
    position: fixed;
    left: 0;
    bottom: 2rem;
    .tool-row {
      margin-top: 20px;
      .search-fab{
        margin-left: -28px;
        margin-right: 20px;
      }
    }
  }
  .back-top {
    position: fixed;
    right: 0.1rem;
    bottom: 0.2rem;
    background-color: #595959;
  }
}
</style>