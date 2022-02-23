const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.username,
  hotArticle: state => state.home.hotArticle,
  dataArr: state => state.home.dataArr,
}
export default getters
