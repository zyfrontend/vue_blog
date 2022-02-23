// 导航菜单
export const menus = [
  {
    currentName: 'Home',
    name: '首页',
    router: 'home',
    icon: 'home',
  },
  {
    currentName: 'Articles',
    name: '文章',
    router: 'articles',
    icon: 'note_add',
  },
  {
    currentName: 'Archives',
    name: '归档',
    router: 'archives',
    icon: 'drafts',
  },
  {
    currentName: 'Categories',
    name: '分类',
    router: 'categories',
    icon: 'dns',
  },
  {
    currentName: 'Tags',
    name: '标签',
    router: 'tags',
    icon: 'loyalty',
  },
  {
    currentName: 'About',
    name: '关于',
    router: 'about',
    icon: 'perm_identity',
  },
]

// copyright
export const copyright = {
  userName: 'zy',
  url: 'http://www.beian.miit.gov.cn/',
  numbering: '粤ICP备2020093325号',
  createTime: 2020,
  text: '本系统由Vue+Muse-UI提供技术支持',
}

// 背景图片
export const bgUrl = 'http://zyfullstack.top/img/202201191047032.jpg'

// 打字机文字
export const typewriter = '欢迎来到我的博客'

// 临时数据
export const articleList = [
  {
    _id: 1,
    title: 'Test',
    createTime: 11111111,
    desc: '这是哪里 这里是小康博客 Hexo 版，此站将会替代曾经的博客。 地址说明 本博客采用的地址是不加 www 的根域名，这是当初一个关于本博客的一些友情链接，我会在博客关闭前逐一去访问，如果贵站还添加着本站，并且支持 https 那么我会搬到新博客',
    cover: 'https://ae01.alicdn.com/kf/H355adba4500642949f3d43d001b83ac3b.jpg',
    categories: 'test',
    tags: ['css', 'html'],
  },
  {
    _id: 2,
    title: 'Test2',
    createTime: 11111111,
    desc: '这是哪里 这里是小康博客 Hexo 版，此站将会替代曾经的博客。 地址说明 本博客采用的地址是不加 www 的根域名，这是当初一个关于本博客的一些友情链接，我会在博客关闭前逐一去访问，如果贵站还添加着本站，并且支持 https 那么我会搬到新博客',
    cover: 'https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/20220107105130.png',
    categories: 'test',
    tags: ['css', 'html'],
  },
  {
    _id: 3,
    title: 'Test2',
    createTime: 11111111,
    desc: '这是哪里 这里是小康博客 Hexo 版，此站将会替代曾经的博客。 地址说明 本博客采用的地址是不加 www 的根域名，这是当初一个关于本博客的一些友情链接，我会在博客关闭前逐一去访问，如果贵站还添加着本站，并且支持 https 那么我会搬到新博客',
    cover: 'http://zyfullstack.top/img/202201191047032.jpg',
    categories: 'test',
    tags: ['css', 'html'],
  },
]
