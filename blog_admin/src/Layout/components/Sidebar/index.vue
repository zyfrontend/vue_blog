<template>
  <div :class="{ 'has-logo': showLogo }">
    <Logo v-if="showLogo" :collapse="isCollapse"></Logo>
    <el-menu
      mode="vertical"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
    >
      <SidebarItem v-for="route in routes" :key="route.path" :item="route" :basePath="route.path"></SidebarItem>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
export default {
  components: {
    Logo,
    SidebarItem,
  },
  computed: {
    ...mapGetters(['sidebar']),
    // 路由导航
    routes() {
      return this.$router.options.routes
    },
    // logo显示
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    // 侧栏缩小 logo标题 是否显示
    isCollapse() {
      return !this.sidebar.opened
    },
    // 当前激活菜单
    activeMenu() {
      const { meta, path } = this.$route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // css 变量
    variables() {
      return variables
    },
  },
}
</script>
