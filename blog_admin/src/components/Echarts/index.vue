<template>
  <div class="echarts" ref="echartsRef"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: ['data'],
  data() {
    return {}
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      const myChart = echarts.init(this.$refs.echartsRef)
      const echartsOption = this.echartsData()
      myChart.setOption(echartsOption, true)
    },
    echartsData() {
      const renderData = this.$props.data
      let xAxisData = []
      let seriesData = []
      renderData.map(item => {
        xAxisData.push(item.title)
        seriesData.push(item.browser)
      })
      return {
        xAxis: {
          type: 'category',
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: seriesData,
            type: 'bar',
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss">
.echarts {
  width: 100%;
  height: 50vh;
  background: transparent;
}
</style>
