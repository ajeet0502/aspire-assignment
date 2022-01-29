
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cards from '../views/Cards.vue'
import NotFoundComponent from '../views/PageNotFound.vue'
const routes = [
  {
    path: '/',
    name: 'cards',
    component: Cards
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: NotFoundComponent
  },
  {
    path: '/payments',
    name: 'payments',
    component: NotFoundComponent
  },
  {
    path: '/credit',
    name: 'credits',
    component: NotFoundComponent
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router