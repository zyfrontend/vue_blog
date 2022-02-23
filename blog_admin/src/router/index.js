import Vue from 'vue'
import Router from 'vue-router'
import storage from '@/utils/storage'
import { blogurl } from '@/config'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/',
    component: () => import('@/Layout'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/index'),
        meta: { title: '首页', icon: 'el-icon-s-home' },
      },
    ],
  },
  {
    path: '/category',
    component: () => import('@/Layout'),
    redirect: '/category',
    children: [
      {
        path: '',
        component: () => import('@/views/Category/index'),
        name: 'category',
        meta: { title: '分类管理', icon: 'el-icon-menu' },
      },
    ],
  },
  {
    path: '/article',
    component: () => import('@/Layout'),
    redirect: '/article',
    children: [
      {
        path: '',
        component: () => import('@/views/Article/index'),
        name: 'article',
        meta: { title: '文章管理', icon: 'el-icon-s-opportunity' },
      },
      {
        path: 'create',
        hidden: true,
        component: () => import('@/views/Article/create'),
        name: 'articleCreate',
        meta: { title: '添加文章', icon: 'nested' },
      },
      {
        path: 'update/:id',
        hidden: true,
        component: () => import('@/views/Article/update'),
        name: 'articleUpdate',
        meta: { title: '编辑文章', icon: 'nested' },
      },
      {
        path: 'comment/:id',
        hidden: true,
        component: () => import('@/views/Article/comment'),
        name: 'articleComment',
        meta: { title: '文章评论', icon: 'nested' },
      },
    ],
  },
  {
    path: '/message',
    component: () => import('@/Layout'),
    redirect: '/message',
    children: [
      {
        path: '',
        component: () => import('@/views/Message/index'),
        name: 'message',
        meta: { title: '留言管理', icon: 'el-icon-s-comment' },
      },
    ],
  },
  {
    path: 'external-link',
    component: () => import('@/Layout'),
    children: [
      {
        path: blogurl,
        meta: { title: '博客前台', icon: 'el-icon-s-promotion' },
      },
    ],
  },
  // 当前面所有的路由匹配不到时 会进入下面的路由
  { path: '*', redirect: '/404', hidden: true },
]
const createRouter = () =>
  new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })
const router = createRouter()

// 路由拦截
router.beforeEach((to, from, next) => {
  let jwt = storage.load('jwt')
  if (jwt) {
    next()
  } else {
    if (to.name == 'login') next()
    else next({ path: 'login' })
  }
  next()
})
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
