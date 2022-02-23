<template>
  <div class="nav-bar">
    <mu-appbar>
      <!--   网站标题   -->
      <span class="blog-title">ZY'sBlog</span>
      <!--   移动端显示菜单按钮   -->
      <mu-button v-show="!isPC" flat slot="left" icon @click="toggleWapMenu(true)">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <!--   PC端导航菜单   -->
      <mu-button
        flat
        slot="right"
        v-for="(item, index) in info.menus"
        :key="item.name"
        :color="lightIndex === index ? '#00e676' : ''"
        v-show="isPC"
        @click="routeJump(item)"
      >
        <mu-icon size="16" :value="item.icon"></mu-icon>{{ item.name }}
      </mu-button>
      <!--   移动端导航菜单   -->
      <mu-bottom-sheet :open.sync="openWapMenu">
        <mu-list @item-click="toggleWapMenu(false)">
          <mu-list-item button v-for="(item, index) in info.menus" :key="item.name" @click="routeJump(item)">
            <mu-list-item-action>
              <mu-icon :value="item.icon" :color="lightIndex === index ? '#00e676' : ''"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title :style="{ color: lightIndex === index ? '#00e676' : '' }">
              {{ item.name }}
            </mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
      <!--   登录之后个人信息   -->
      <!--      <mu-button flat slot="right" ref="user" @click="openUser = !openUser">-->
      <!--        <div class="user">-->
      <!--          <span>frontendzy</span>-->
      <!--          <mu-icon value="expand_more"></mu-icon>-->
      <!--        </div>-->
      <!--      </mu-button>-->
      <!--      <mu-popover :open.sync="openUser" :trigger="triggerUser">-->
      <!--        <mu-list>-->
      <!--          <mu-list-item button>-->
      <!--            <mu-list-item-title>个人中心</mu-list-item-title>-->
      <!--          </mu-list-item>-->
      <!--          <mu-list-item button>-->
      <!--            <mu-list-item-title>退出</mu-list-item-title>-->
      <!--          </mu-list-item>-->
      <!--        </mu-list>-->
      <!--      </mu-popover>-->
    </mu-appbar>
  </div>
</template>

<script>
import { menus } from '@/config'
export default {
  name: 'NavBar',
  data() {
    return {
      // 高亮当前导航所在页面按钮
      lightIndex: 0,
      // 移动端导航显示
      openWapMenu: false,
      openUser: false,
      triggerUser: null,
      info: {
        menus: menus,
      },
    }
  },
  methods: {
    // 显示隐藏手机端菜单栏
    toggleWapMenu(bool) {
      this.openWapMenu = bool
    },
    // 高亮显示导航按钮
    // switchNavBarLight() {
    //   switch (this.$router.history.current.path) {
    //     case this.info.menus.router
    //   }
    // },
    //  路由跳转
    routeJump(item) {
      // console.log(this.$route.name, item.currentName)
      if (this.$route.name === item.currentName) {
        return
      }
      this.$router.push({
        name: item.currentName,
      })
    },
  },
  mounted() {
    // this.triggerUser = this.$refs.user.$el
  },
  watch: {
    '$store.state.lightIndex': function (val) {
      this.lightIndex = val
    },
  },
}
</script>

<style scoped lang="less">
.nav-bar {
  width: 100%;
  .blog-title {
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
