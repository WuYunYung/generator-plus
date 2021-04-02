<template>
  <v-container fluid class="projects">
    <v-navigation-drawer class="nav-bar" absolute permanent left>
      <v-toolbar flat dense class="nav-bar-header">
        <v-toolbar-title>Projects:</v-toolbar-title>
        <v-spacer></v-spacer>
        <create-project />
      </v-toolbar>
      <v-list nav dense class="project-list">
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in projects"
            :key="i"
            link
            :to="item.to"
          >
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view class="content-container"></router-view>
  </v-container>
</template>

<style scoped>
.projects {
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-areas: "nav content";
}

.nav-bar {
  padding: 0;
  display: grid;
  grid-template-rows: auto 1fr;
}
.nav-bar-header {
  border-bottom: 1px solid #e0e0e0;
}

.project-list {
  height: calc(100% - 48px) !important;
  overflow: auto;
}

.content-container {
  grid-area: content;
  padding: 0;
}
</style>

<script>
import createProject from "../../components/projects/createProject";
import store from "../../store/store";
import { mapActions } from "vuex";
export default {
  data: () => ({}),
  mounted() {
    window.addEventListener("storage", () => this.init());
  },
  computed: {
    projects: () => {
      const projects = store.state.Projects.projects;
      if (projects.lenght === 0) return [];
      const items = [];
      projects.forEach((element) => {
        items.push({
          title: `C${element.sn}`,
          subtitle: `${element.jn} - ${element.name}`,
          to: `/projects/C${element.sn}`,
        });
      });
      return items;
    },
  },
  components: {
    createProject,
  },
  methods: {
    ...mapActions("Projects", {
      init: "initialize",
    }),
  },
};
</script>
