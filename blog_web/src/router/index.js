import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Index.vue'),
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/Articles/Index.vue'),
  },
  {
    path: '/articles/detail',
    name: 'ArticlesDetail',
    component: () => import('@/views/Articles/Detail.vue'),
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import('@/views/Archives/Index.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/Categories/Index.vue'),
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import('@/views/Tags/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/Index.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound/Index.vue'),
  },
]
const router = new VueRouter({
  routes,
})

export default router
