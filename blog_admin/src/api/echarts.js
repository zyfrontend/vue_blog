import request from '@/request/index'

export default {
  getHotArticle() {
    return request.get('/api/article/webhotlist')
  },
}
