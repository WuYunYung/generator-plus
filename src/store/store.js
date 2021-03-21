import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Projects from './projects'

export default new Vuex.Store({
  modules: {
    Projects
  }
})