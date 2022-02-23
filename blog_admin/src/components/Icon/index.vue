<template>
  <svg :class="svgClass" aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'svgIcon',
  props: {
    data_iconName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '20',
    },
  },
  computed: {
    svgClass() {
      //svg 的class
      if (this.className) {
        return `svg-icon ${this.className}`
      } else {
        return 'svg-icon'
      }
    },
    iconName() {
      //svg xlink-href 指向的文件名
      return `#icon-${this.data_iconName}`
    },
  },
}
</script>
<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
