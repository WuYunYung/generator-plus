import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
  },
  mutations: {
    initProjects(state){
      state.projects=localStorage.getItem("projects")
      ? JSON.parse(localStorage.getItem("projects"))
      : [];
    },
    addProject(state,project){
      state.projects.push({...project});
      localStorage.setItem("projects",JSON.stringify(state.projects));
    }
  },
  actions: {
  },
  modules: {
  }
})
