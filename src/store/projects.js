const ls = localStorage;

const Projects = {
  namespaced: true,
  state: () => ({
    projects: [],
  }),
  mutations: {
    init(state) {
      const data = ls.getItem("projects");
      state.projects = data ? JSON.parse(data) : [];
    },
    // C|R|U|D
    saveState(state) {
      const projects = JSON.stringify(state.projects);
      ls.setItem("projects", projects);
    },
    create(state, project) {
      state.projects.push(project);
    },
    delete(state, sn) {
      state.projects=state.projects.filter((n) => n.sn !== sn)
    },
  },
  actions: {
    hasProject({ state }, sn) {
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
    async create({ dispatch, commit }, project) {
      await dispatch("hasProject", project.sn).then(
        () => {
          alert("This project has been created.");
        },
        () => {
          commit("create", project);
          commit("saveState");
        }
      );
    },
    async delete({ dispatch, commit }, sn) {
      await dispatch("hasProject", sn).then(
        () => {
          commit("delete", sn);
          commit("saveState");
        },
        () => {
          alert("This project has not been created.");
        }
      );
    },
  },
  getters: {
    projectsCintNumberList: (state) => {
      return state.projects.map((item) => item.sn);
    },
  },
};

export default Projects;
