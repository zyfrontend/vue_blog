import Vue from 'vue'
import Vuex from 'vuex'
// import { menus } from '@/config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 高亮导航
    lightIndex: 0,
    //  文章
    articles: 20,
    //  分类
    categories: 20,
    //  标签
    tags: 10,
  },
  mutations: {
    //  切换高亮
    switchLight(state, index) {
      // console.log(state.lightIndex, index)
      state.lightIndex = index
    },
  },
  actions: {},
})
