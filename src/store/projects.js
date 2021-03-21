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
    create(state, project) {
      state.projects.push(project);
      const projects = JSON.stringify(state.projects);
      ls.setItem("projects", projects);
    },
    //C.1 :检查是否含有已有项目
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
          alert("Project has been created!");
        },
        () => {
          commit("create", project);
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
