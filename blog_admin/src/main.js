import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import '@/Element'
import '@/utils/svg'
import Api from '@/api'
Vue.prototype.$api = Api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
