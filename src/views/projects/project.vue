<template>
  <v-container class="project" fluid>
    <v-toolbar flat dense class="project-nav">
      <projectDetail :project="project" />
      <v-spacer></v-spacer>
      <v-btn color="indigo" depressed text samll>
        <v-icon left>mdi-source-branch</v-icon>
        {{ branch }}
      </v-btn>
      <template v-slot:extension>
        <v-tabs align-with-title color="primary">
          <v-tab v-for="(item, index) in items" :key="index" :to="item.to">
            {{ item.text }}
          </v-tab>
        </v-tabs>
        <surveyChecker :project="project" />
        <updateProject :project="project" />
        <deleteProject :title="title" />
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
export default {
  data: () => ({
    branch: "main",
    branchs: ["main", "temp0402"],
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
  },
};
</script>
