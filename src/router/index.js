import { createRouter, createWebHistory } from 'vue-router'
import Sender from '@/views/Sender.vue'

const routes = [
  {
    path: '/',
    name: 'Sender',
    component: Sender
  },
  {
    path: '/owner',
    name: 'Owner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Owner.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
