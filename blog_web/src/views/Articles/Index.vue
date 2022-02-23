<template>
  <div class="articles">
    <Layout :bcolor="bcolor">
      <div slot="right">
        <ArticleCard
          v-for="(item, index) in articleList"
          :key="item._id"
          :articleCardInfo="item"
          :articleIndex="index"
          @gotoDetail="gotoDetail"
        ></ArticleCard>
      </div>
    </Layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout'
import ArticleCard from '@/components/ArticleCard'
import { articleList } from '@/config'
export default {
  data() {
    return {
      bcolor: 'transparent',
      articleList,
    }
  },
  components: {
    Layout,
    ArticleCard,
  },
  mounted() {
    this.$store.commit('switchLight', 1)
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        name: 'ArticlesDetail',
        query: {
          id,
        },
      })
    },
  },
}
</script>
