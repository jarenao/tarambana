import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prueba from '../views/Prueba.vue'
import Paco from '../views/Paco.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/prueba',
    name: 'Prueba',
    component: Prueba
  },
  {
    path: '/paco',
    name: 'Paco',
    component: Paco
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
