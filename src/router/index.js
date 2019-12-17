import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes.js'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// next是vue router定好的，不执行next，vue router就不会进入页面

// to 前往的页面， from 来自的页面，next是一个方法

// next调用了，才会前往页面

router.beforeEach((to, from, next) => {
  const user = store.state.user

  if (user !== null && to.name === 'login') {
    next({
      replace: true,
      name: 'home'
    })
  } else if (user === null && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    })
  } else {
    next()
  }
})

export default router
