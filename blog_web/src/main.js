import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局 css
import '@/assets/style/global.less'
// 自适应 css
import '@/assets/style/adaptive.less'
// ui
import '@/Muse'
// 工具引入
import '@/utils'
// 全局提示
import Toast from 'muse-ui-toast'
Vue.use(Toast, {
  position: 'top', // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: 'close', // 关闭的图标
  close: true, // 是否显示关闭按钮
  successIcon: 'check_circle', // 成功信息图标
  infoIcon: 'info', // 信息信息图标
  warningIcon: 'priority_high', // 提醒信息图标
  errorIcon: 'warning', // 错误信息图标
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
