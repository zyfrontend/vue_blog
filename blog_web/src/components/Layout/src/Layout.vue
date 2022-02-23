<template>
  <div :class="['container', this.muCardClassName]">
    <div class="layout-left">
      <InfoCard></InfoCard>
    </div>
    <div class="layout-right" :style="bgStyle">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard'
import mixin from '@/mixin'
export default {
  mixin: [mixin],
  props: {
    bcolor: {
      type: String,
      default: 'white',
    },
  },
  data() {
    return {
      bgStyle: {
        background: this.bcolor,
      },
      //实时屏幕宽度
      windowWidth: document.documentElement.clientWidth,
      muCardClassName: [],
    }
  },
  components: {
    InfoCard,
  },
  methods: {
    // PC 页面宽带大于 1200
    // 移动端 页面宽度小于 1199
    switchClass(windowWidth) {
      if (windowWidth >= 1200) {
        this.muCardClassName = 'pc'
      } else if (windowWidth <= 1199) {
        this.muCardClassName = 'moblie'
      }
    },
  },
  mounted() {
    // 实时获取浏览器宽度
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth
        this.windowWidth = window.fullWidth
      })()
    }
    console.log(this.$router.history.current.name)
  },
  watch: {
    windowWidth: {
      handler: function (val) {
        this.switchClass(val)
      },
      // 默认第一次执行
      immediate: true,
    },
  },
}
</script>
