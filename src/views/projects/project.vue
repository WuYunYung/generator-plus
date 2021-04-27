<template>
  <v-container class="project" fluid>
    <v-toolbar flat dense class="project-nav">
      <projectDetail :project="project" />
      <v-spacer></v-spacer>
      <v-menu rounded offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list class="flex flex-col">
          <surveyChecker :project="project" />
          <updateProject :project="project" />
          <deleteProject :title="title" />
        </v-list>
      </v-menu>
      <template v-slot:extension>
        <v-tabs color="primary">
          <v-tab v-for="(item, index) in items" :key="index" :to="item.to">
            {{ item.text }}
          </v-tab>
        </v-tabs>
        <branch-selector :branchs="project.branchs" />
      </template>
    </v-toolbar>
    <router-view class="project-view"></router-view>
  </v-container>
</template>

<style scoped>
.project {
  padding: 0;
  width: 100%;
  height: 100%;
}

.project-nav {
  border-bottom: 1px solid #e0e0e0;
  grid-area: header;
}

.project-aside {
  grid-area: aside;
}
</style>

<script>
import deleteProject from "../../components/projects/deleteProject";
import updateProject from "../../components/projects/updateProject";
import surveyChecker from "../../components/projects/surveyChecker";
import projectDetail from "../../components/projects/projectDetail";
import branchSelector from "../../components/projects/branchSelector.vue";
export default {
  data: () => ({
    branchRouter: "",
  }),
  computed: {
    title() {
      return this.$route.params.sn;
    },
    project() {
      const projects = this.$store.state.Projects.projects;
      const sn = this.title.replace("C", "");
      for (const project of projects) {
        if (project.sn === sn) {
          return { ...project };
        }
      }
      return {};
    },
    subtitle() {
      return `Job number: ${this.project.jn}  Project name: ${this.project.name}`;
    },
    items() {
      return [
        {
          text: "Survey links",
          icon: "mdi-compass",
          to: `/projects/${this.title}/urls`,
        },
        {
          text: "Other links",
          icon: "mdi-hammer-wrench",
          to: `/projects/${this.title}/others`,
        },
        {
          text: "Close alert",
          icon: "mdi-alert-circle",
          to: `/projects/${this.title}/alert`,
        },
      ];
    },
  },
  components: {
    deleteProject,
    updateProject,
    surveyChecker,
    projectDetail,
    branchSelector,
  },
};
</script>

BranchSelector
