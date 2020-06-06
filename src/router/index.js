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
    component:mainPanel
  }
]

const router = new VueRouter({routes})

export default router