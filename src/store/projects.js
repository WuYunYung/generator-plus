const ls = localStorage;

const Projects = {
  namespaced: true,
  state: () => ({
    keys: [],
    projects: [],
  }),
  mutations: {
    initKeys(state) {
      const data = ls.getItem("keys");
      state.keys = data ? JSON.parse(data) : [];
    },
    initProjects(state) {
      for (const i of state.keys) {
        const data = ls.getItem(i);
        if (data) {
          state.projects.push(JSON.parse(data));
        }
      }
    },
    // C|R|U|D
    setKeys(state) {
      const keys = JSON.stringify(state.keys);
      ls.setItem("keys", keys);
    },
    setProjects(state) {
      for (const i in state.projects) {
        ls.setItem(i.sn, JSON.stringify(i));
      }
    },
    setProject(state, project) {
      state.projects.push(project);
      state.keys.push(project.sn);
      ls.setItem(project.sn, JSON.stringify(project));
    },
    deleteProject(state, sn) {
      state.projects = state.projects.filter((n) => n.sn !== sn);
      state.keys = state.keys.filter((n) => n !== sn);
      ls.removeItem(sn);
    },
    updateProject(state, project) {
      for (const i of state.projects) {
        if (i.sn === project.sn) {
          for (const j in project) {
            if (i[j] !== project[j]) i[j] = project[j];
          }
          ls.setItem(project.sn, JSON.stringify(project));
          break;
        }
      }
    },
  },
  actions: {
    async hasProject({ state }, sn) {
      return new Promise((resolve, reject) => {
        for (const project of state.projects) {
          if (project.sn === sn) {
            resolve();
            break;
          }
        }
        reject();
      });
    },
    async createProject({ dispatch, commit }, project) {
      await dispatch("hasProject", project.sn).then(
        () => {
          alert("This project has been created.");
        },
        () => {
          commit("setProject", project);
          commit("setKeys");
        }
      );
    },
    async deleteProject({ dispatch, commit }, sn) {
      await dispatch("hasProject", sn).then(
        () => {
          commit("deleteProject", sn);
          commit("setKeys");
        },
        () => {
          alert("This project has not been created.");
        }
      );
    },
    async updateProject({ dispatch, commit }, project) {
      await dispatch("hasProject", project.sn).then(
        () => {
          commit("updateProject", project);
        },
        () => {
          alert("This project has not been created.");
        }
      );
    },
    async initialize({ commit }) {
      commit("initKeys");
      commit("initProjects");
    },
  },
  getters: {
    projectsCintNumberList: (state) => {
      return state.projects.map((item) => item.sn);
    },
  },
};

export default Projects;
