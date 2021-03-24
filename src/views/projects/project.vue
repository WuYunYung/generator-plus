<template>
  <v-container class="content" fluid>
    <v-toolbar flat dense class="content-nav">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-subheader
        >Job number: <b>{{ `${this.project.jn}` }}</b></v-subheader
      >
      <v-subheader
        >Project name: <b>{{ `${this.project.name}` }}</b></v-subheader
      >
      <v-subheader
        >Server: <b>{{ `${this.project.server}` }}</b></v-subheader
      >
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="`/projects/${title}/urls`">SURVEY URLS</v-tab>
          <v-tab :to="`/projects/${title}/others`">Other</v-tab>
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
          <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
          Checker
        </v-btn>
        <updateProject :project="project" />
        <deleteProject :title="title" />
      </template>
    </v-toolbar>
    <router-view></router-view>
  </v-container>
</template>

<style scoped>
.content {
  height: 100%;
  padding: 0;
}

.content-nav {
  border-bottom: 1px solid #e0e0e0;
}
</style>

<script>
import deleteProject from "../../components/projects/deleteProject";
import updateProject from "../../components/projects/updateProject";
export default {
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
  },
  components: {
    deleteProject,
    updateProject,
  },
};
</script>
