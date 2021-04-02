<template>
  <v-container class="project" fluid>
    <v-toolbar flat dense class="project-nav">
      <v-subheader v-for="(item, index) in details" :key="index"
        ><b>{{ item.title }}</b> : {{ item.text }}</v-subheader
      >
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
        <v-btn
          v-show="showChecker"
          depressed
          color="warning"
          text
          small
          :href="checker"
          target="_blank"
          link
        >
          <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>
          Checker
        </v-btn>
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
    checker() {
      return `https://surveys.globaltestmarket.com/survey/lib/local/surveychecker/v2349?checkPath=apac/${this.title}`;
    },
    showChecker() {
      const server = this.project.server;
      return server === "APAC";
    },
    details() {
      return [
        { title: "Job number", text: this.project.jn },
        { title: "Project name", text: this.project.name },
        { title: "Cint number", text: this.title },
        { title: "Server", text: this.project.server },
      ];
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
  },
};
</script>
