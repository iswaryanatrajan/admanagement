import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accounts',
      component: () => import('../views/Accounts.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/productinfo',
      name: 'productinfo',
      component: () => import('../views/ProductInfo.vue')
    },
    {
      path: '/generalappeal',
      name: 'generalappeal',
      component: () => import('../views/GeneralAppeal.vue')
    },
    {
      path: '/adsettings',
      name: 'adsettings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/admanagement',
      name: 'admanagement',
      component: () => import('../views/Admanagement.vue')
    }
  ]
})

export default router
