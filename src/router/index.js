import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const projects = ()=>import('../views/projects/projects')

const routes = [
  {
    path: '/projects',
    alias: '/',
    component:projects,
    children: [
      {
        path: ':sn',
        component: ()=>import('../views/projects/project')
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router