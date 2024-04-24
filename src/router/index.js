import { createRouter, createWebHistory } from 'vue-router'
// eslint-disable-next-line no-unused-vars
import HomeView from '../views/HomeView.vue'
import Login from '../views/login/index.vue'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/footer', name: 'footer', component: () => import('@/components/footer/index.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现和hash 模式。createWebHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
