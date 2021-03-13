import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
