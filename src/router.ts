import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Random from './views/Random.vue'

Vue.use(Router)

export default new Router({

  // When using history mode, the URL will look normal
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (random.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Detail
    },
    {
      path: '/random',
      name: 'random',
      // route level code-splitting
      // this generates a separate chunk (random.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('./views/Random.vue')
      component: Random
    }
  ]
})
