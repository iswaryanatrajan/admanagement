import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
const Profile = () => import("../components/Profile.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: '/accounts',
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
      path: '/products/:id',
      name: 'products',
      component: () => import('../views/Products.vue'),
      params: true
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
    },
    {
      path: '/productinfo/:id',
      name: 'productinfo',
      component: () => import('../views/ProductInfo.vue'),
      params: true
    },
    {
      path: '/generalappeal/:id',
      name: 'generalappeal',
      component: () => import('../views/GeneralAppeal.vue'),
      params: true
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
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: Profile,
    },
  ]
})

export default router
