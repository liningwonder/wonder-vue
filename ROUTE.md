import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/\*\*

- 也可以先定义routes
- const router = createRouter({
- history: createWebHistory(import.meta.env.BASE_URL),
- routes: [
- {
-     path: '/',
-     name: 'home',
-     component: HomeView
- },
- {
-     path: '/about',
-     name: 'about',
-     // route level code-splitting
-     // this generates a separate chunk (About.[hash].js) for this route
-     // which is lazy-loaded when the route is visited.
-     component: () => import('../views/AboutView.vue')
- }
- ]
- })
  \*/

const routes = [
{ path: '/', name: 'home', component: HomeView },
{ path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
]

const router = createRouter({
// 4. 内部提供了 history 模式的实现和hash 模式。createWebHistory
history: createWebHistory(import.meta.env.BASE_URL),
routes
})

export default router
