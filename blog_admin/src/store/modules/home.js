import echarts from '@/api/echarts'
import article from '@/api/article'
import storage from '@/utils/storage'
import dayjs from 'dayjs'
const getDefaultState = () => {
  return {
    // 文章提交记录
    dataArr: storage.load('dataArr') || [],
    // 热门文章
    hotArticle: storage.load('hotArticle') || '',
  }
}
const state = getDefaultState()
const mutations = {
  CHANGE_COMMIT_RECORD: (state, dataArr) => {
    state.dataArr = dataArr
  },
  CHANGE_HOT_ARTICLE: (state, hotArticle) => {
    state.hotArticle = hotArticle
  },
}

const actions = {
  // 提交记录
  async getArticleCommitRecord({ rootState, commit }, data) {
    // 当前登录用户
    const { username } = rootState.user.info
    let params = {
      ...data,
      author: username,
    }
    const res = await article.getArticleList(params)
    if (res.data.length !== 0) {
      // 时间格式化 后面做分类
      res.data.map(item => {
        item.date = dayjs(item.createdAt).format('YYYY-MM-DD')
      })
      const result = Object.values(res.data)
      // 统计数据
      let dataArr = []
      result.map(mapItem => {
        if (dataArr === 0) {
          dataArr.push({ date: mapItem.date, list: [mapItem] })
        } else {
          let res = dataArr.some(item => {
            if (item.date === mapItem.date) {
              item.list.push(mapItem)
              return true
            }
          })
          if (!res) {
            dataArr.push({ date: mapItem.date, list: [mapItem] })
          }
        }
      })
      dataArr.map(item => {
        item.count = item.list.length
      })
      commit('CHANGE_COMMIT_RECORD', dataArr)
      storage.save('dataArr', dataArr)
    }
  },
  // 获取热门文章
  async getHotArticle({ commit }) {
    const res = await echarts.getHotArticle()
    console.log('热门文章数据获取', res)
    commit('CHANGE_HOT_ARTICLE', res.data)
    storage.save('hotArticle', res.data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
