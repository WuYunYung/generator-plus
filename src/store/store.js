import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const st = localStorage;

export default new Vuex.Store({
  state: {
    projects: []
  },
  getters: {
    projectsCintNumberList: state => {
      return state.projects.map(item => item.sn)
    }
  },
  mutations: {
    init(state) {
      const data=st.getItem('projects')
      state.projects = data?JSON.parse(data):[]
    },
    create(state, project) {
      state.projects.push(project)
      const projects = JSON.stringify(state.projects)
      st.setItem('projects', projects)
    }
  }
})