import VueRouter from 'vue-router'
import Vue from 'vue'
import mainPanel from '../components/mainPanel.vue'

Vue.use(VueRouter)

const routes=[
  {
    path:'/generator-plus',
    alias: '/links',
    component:mainPanel
  },
  {
    path:'/',
    alias: '/links',
    component:mainPanel
  },
  {
    path:'/links',
    component:mainPanel
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router