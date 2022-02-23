<template>
  <div class="copyright">
    <div v-if="isPC">
      {{ copyright.text }} - © {{ copyright.createTime }} - {{ getdate() }} By {{ copyright.userName }}
    </div>
    <div>{{ copyright.numbering }}</div>
  </div>
</template>

<script>
import { copyright } from '@/config'
export default {
  data() {
    return {
      copyright,
    }
  },
  methods: {
    getdate() {
      let date = new Date()
      let year = date.getFullYear()
      let currentdate = year
      return currentdate
    },
  },
}
</script>

<style lang="less" scoped>
.copyright {
  text-align: center;
}
</style>
