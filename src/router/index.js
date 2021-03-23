import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Projects = ()=>import('../views/projects/Projects')
const Home =()=>import('../views/Home')
const About =()=>import('../views/About')

const routes = [
  {
    path: '/projects',
    component:Projects,
    children: [
      {
        path: '/projects/:sn',
        component: ()=>import('../views/projects/Project'),
        children:[
          {
            path:'/projects/:sn/urls',
            component:()=>import('../views/projects/SurveyURLs')
          },
          {
            path:'/projects/:sn/others',
            component:()=>import('../views/projects/OtherURLs')
          }
        ]
      }
    ]
  },
  {
    path: '/Home',
    alias: '/',
    component:Home,
  },{
    path:'/About',
    component:About,
  }
]


const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router