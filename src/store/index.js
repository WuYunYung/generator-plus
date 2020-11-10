import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: localStorage.getItem("projects")
    ? JSON.parse(localStorage.getItem("projects"))
    : [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
