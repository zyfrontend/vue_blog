<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <Navbar></Navbar>
      </div>
      <Appmain></Appmain>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/Layout/components/Sidebar'
import Appmain from '@/Layout/components/Appmain'
import Navbar from '@/Layout/components/Navbar'
import ResizeMixin from './mixin'
export default {
  name: 'Layout',
  mixins: [ResizeMixin],
  components: {
    Sidebar,
    Appmain,
    Navbar,
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      }
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
  },
}
</script>
