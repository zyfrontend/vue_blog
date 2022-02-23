<template>
  <div class="tags">
    <Layout>
      <div class="right shadow" slot="right">
        <h1>标签</h1>
        <div class="tags-wap tagcloud">
          <router-link :to="{ name: 'tagsdetails', query: { id: item.name } }" v-for="item in tags" :key="item.name">
            <mu-chip :color="item.color" v-if="item.articleNum > 0" class="tag">{{
              `${item.name}(${item.articleNum})`
            }}</mu-chip>
          </router-link>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout'
import { randomColor } from '@/utils'

export default {
  data() {
    return {
      tags: [
        { name: 'Vue', articleNum: 10, color: randomColor() },
        { name: 'React', articleNum: 10, color: randomColor() },
        { name: 'JavaScript', articleNum: 10, color: randomColor() },
        { name: 'TypeScript', articleNum: 10, color: randomColor() },
      ],
    }
  },
  components: {
    Layout,
  },
  mounted() {
    this.$store.commit('switchLight', 4)
  },
}
</script>

<style lang="less" scoped>
.tags {
  .right {
    padding: 10px;
  }
}
</style>
