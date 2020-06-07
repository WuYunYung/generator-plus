import VueRouter from 'vue-router'
import Vue from 'vue'
import mainPanel from '../components/mainPanel.vue'

Vue.use(VueRouter)

const routes=[
  {
    path:'/links',
    component:mainPanel
  },
  {
    path:'/',
    redirect:'/links',
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

export default router