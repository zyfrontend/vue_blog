<template>
  <div class="header">
    <mu-appbar :color="backgroundIndex" :z-depth="0">
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
          <mu-list-item button>
            <mu-list-item-title>个人中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>退出</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </mu-appbar>
  </div>
</template>

<script>
import { menus } from "@/config";
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
  data() {
    return {
      info: {
        menu: menus,
      },
      openTheme: false,
      triggerTheme: null,
      openUser: false,
      triggerUser: null,
      openWapMenu: false,
    };
  },
  mounted() {
    this.triggerTheme = this.$refs.theme.$el;
    this.triggerUser = this.$refs.user.$el;
  },
  methods: {
    // 移动端 菜单开启关闭
    toogleWapMenu(bool) {
      this.openWapMenu = bool;
    },
    // 路由跳转
    go(item) {
      console.log(this.$route);
      if (this.$route.name === item.router) {
        return;
      }
      this.$router.push({
        name: item.router,
      });
    },
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
}
</style>