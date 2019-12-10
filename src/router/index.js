import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
  ,
  {
    path: '/about/a',
    name: 'aboutA',
    component: () => import('../views/a.vue')
  }
  ,
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue')
  },
  {
    path: '/mine/center',
    name: 'mineCenter',
    component: () => import('../views/center.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
