import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,

    component: () =>
      import(
        /* webpackChunkName: "destinationDetails" */ '../views/DestinationDetails.vue'
      ),
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceDetails',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experienceDetails" */ '../views/ExperienceDetails.vue'
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const isExist = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (isExist) {
        next()
      } else {
        next({ name: 'notFound' })
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    let position = {}
    if (savedPosition) {
      position = savedPosition
    } else if (to.hash) {
      if (document.querySelector(to.hash)) {
        position.selector = to.hash
        if (to.hash === '#experience') {
          position.offset = { y: 140 }
        }
      }
    } else position = { x: 0, y: 0 }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(position)
      }, 330)
    })
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
