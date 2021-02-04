import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// const links= () => import('../components/Links/index.vue')
// const commands=()=>import('../components/Commands/index.vue')

const header = () => import("../views/header.vue")
const nav = () => import("../views/nav.vue")
const home = () => import('../views/home.vue')
const detail = () => import('../views/detail.vue')
const create = () => import('../views/create.vue')

const commmon={header,nav}

const routes = [
  {
    path: '/home',
    alias:'/',
    components: {
      ...commmon,
      default: home
    }
  },
  {
    path: '/create',
    alias:'/',
    components: {
      ...commmon,
      default: create
    }
  },
  {
    path: '/:sn',
    components: {
      ...commmon,
      default: detail
    }
  },
  // {
  //   path:'/generator-plus',
  //   alias: '/links',
  //   component:links
  // },
  // {
  //   path:'/',
  //   alias: '/links',
  //   component:links
  // },
  // {
  //   path:'/links',
  //   component:links
  // },
  // {
  //   path:'/commands',
  //   component:commands
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router