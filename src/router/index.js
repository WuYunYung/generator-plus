import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const links= () => import('../components/Links/index.vue')
const commands=()=>import('../components/Commands/index.vue')

const routes=[
  {
    path:'/generator-plus',
    alias: '/links',
    component:links
  },
  {
    path:'/',
    alias: '/links',
    component:links
  },
  {
    path:'/links',
    component:links
  },
  {
    path:'/commands',
    component:commands
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router