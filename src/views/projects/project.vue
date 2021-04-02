<template>
  <v-container class="project" fluid>
    <v-toolbar flat dense class="project-nav">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
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
    </v-toolbar>
    <v-navigation-drawer permanent class="project-aside" right>
      <v-list nav dense>
        <v-list-item-group color="primary" link>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-subheader>Project details:</v-subheader>
        <v-list-item v-for="(item, index) in details" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view class="project-view"></router-view>
  </v-container>
</template>

<style scoped>
.project {
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header header"
    "nav aside"
    "body aside";
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
  data: () => ({}),
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
        { title: "Job number:", text: this.project.jn },
        { title: "Project name:", text: this.project.name },
        { title: "Server:", text: this.project.server },
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
