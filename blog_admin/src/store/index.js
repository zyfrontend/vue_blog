import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import home from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { app, settings, user, home },
  getters,
})
