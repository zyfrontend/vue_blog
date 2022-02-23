<template>
  <div class="type-write">
    <div class="text">{{ temporary }}</div>
  </div>
</template>

<script>
let i = 0
let timer = null
import { typewriter } from '@/config'
export default {
  data() {
    return {
      typewriter,
      temporary: '',
    }
  },
  mounted() {
    this.typing()
  },
  methods: {
    typing() {
      if (i <= this.typewriter.length) {
        this.temporary = this.typewriter.slice(0, i++) + '_'
        timer = setTimeout(this.typing, 100)
      } else {
        this.temporary = this.typewriter
        clearTimeout(timer)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.type-write {
  .text {
    color: #fff;
    font-weight: 500;
    font-size: 2rem;
  }
}
</style>
