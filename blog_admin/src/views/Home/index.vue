<template>
  <div>
    <el-card style="margin-bottom: 10px">
      <h1>欢迎来到博客后台管理系统</h1>
    </el-card>
    <el-card>
      <div slot="header">文章发布记录</div>
      <CalendarHeatmap :end-date="currentDate" :values="dataArr" :range-color="color"></CalendarHeatmap>
    </el-card>
    <div class="bottom">
      <el-card style="flex: 1">
        <div slot="header">热门文章</div>
        <Echarts :data="hotArticle"></Echarts>
      </el-card>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters } from 'vuex'
import Echarts from '@/components/Echarts'
import { CalendarHeatmap } from 'vue-calendar-heatmap'
import 'vue-calendar-heatmap/dist/vue-calendar-heatmap.css'
export default {
  data() {
    return {
      currentDate: dayjs(),
      color: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
      params: {
        pageIndex: 1,
        pageSize: 10000,
        keyword: '',
      },
    }
  },
  computed: {
    ...mapGetters(['hotArticle', 'dataArr']),
  },
  components: {
    CalendarHeatmap,
    Echarts,
  },
  created() {
    this.$store.dispatch('home/getHotArticle')
    this.$store.dispatch('home/getArticleCommitRecord', this.params)
  },
}
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
</style>
