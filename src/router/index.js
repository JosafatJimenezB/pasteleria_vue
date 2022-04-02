import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/pastel',
    name: 'Pastel',
    component: () => import('../views/PastelView.vue')
  },
  {
    path: '/adornos',
    name: 'adornos',
    component: () => import('../views/adornosView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/contactoView.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: () => import('../views/pedidoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
