import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('../views/root-view.vue')
  },
  {
    path: '/checkbox3',
    component: () => import('../views/checkbox/checkbox-view-3.vue')
  },
  {
    path: '/checkbox1',
    component: () => import('../views/checkbox/checkbox-view-1.vue')
  },
  {
    path: '/checkbox2',
    component: () => import('../views/checkbox/checkbox-view-2.vue')
  },
  {
    path: '/checkbox4',
    component: () => import('../views/checkbox/checkbox-view-4.vue')
  },
  {
    path: '/radio1',
    component: () => import('../views/radio/radio-view.vue')
  },
  {
    path: '/radio2',
    component: () => import('../views/radio/radio-view-2.vue')
  },
  {
    path: '/radio3',
    component: () => import('../views/radio/radio-view-3.vue')
  },
  {
    path: '/radio4',
    component: () => import('../views/radio/radio-view-4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
