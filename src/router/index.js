import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Projects = () => import("../views/projects");
const Home = () => import("../views/Home");
const About = () => import("../views/About");

const routes = [
  { path: '/', redirect: '/projects' },
  {
    path: "/projects",
    component: Projects,
    children: [
      {
        path: ":sn",
        component: () => import("../views/projects/project"),
        children: [
          {path:"",redirect:"urls"},
          {
            path: "urls",
            component: () => import("../views/projects/surveyURLs"),
          },
          {
            path: "others",
            component: () => import("../views/projects/otherURLs"),
          },
          {
            path: "alert",
            component: () => import("../views/projects/closeAlert"),
          },
        ],
      },
    ],
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/About",
    component: About,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active",
});

export default router;
