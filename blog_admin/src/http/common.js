const $noify = require('element-ui').Notification
import store from '@/store'
import router from '@/router'
import { getType } from '@/utils'
/**
 * 拦截请求
 */
function interceptRequest(axiosInstance) {
  axiosInstance.interceptors.request.use(
    config => {
      const token = store.state.user.token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        // 没有token
        // router.replace({ path: '/login' })
      }
      return config
    },
    error => {
      $noify({
        type: 'error',
        message: '请求失败，请检查网络',
      })
      return Promise.reject(error)
    }
  )
}
