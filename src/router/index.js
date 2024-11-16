import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Private from '../views/Private.vue'

import { authGuard } from '@auth0/auth0-vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    showInMenu: false,
    meta: { icon: 'home', requiresAuth: false }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    showInMenu: true,
    meta: { icon: 'about', requiresAuth: false }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    showInMenu: true,
    meta: { icon: 'gallery', requiresAuth: false }
  },
  {
    path: '/private',
    name: 'private',
    component: Private,
    beforeEnter: authGuard,
    showInMenu: true,
    meta: { icon: 'user-icon', requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
