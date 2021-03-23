<template>
  <v-container fluid class="projects">
    <v-container class="nav-bar">
      <v-toolbar flat dense>
        <v-toolbar-title>Projects:</v-toolbar-title>
        <v-spacer></v-spacer>
        <create-project />
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense two-line class="project-list">
        <v-list-item-group>
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
    </v-container>
    <router-view class="content-container"></router-view>
  </v-container>
</template>

<style scoped>
.project-list .v-list-item:hover .delete {
  opacity: 1;
}
.project-list .v-list-item .delete {
  opacity: 0;
}

.projects {
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: ". content";
}

.nav-bar {
  position: fixed;
  max-width: 300px;
  padding: 0;
  border-right: 1px solid #e0e0e0;
  display: grid;
  height: calc(100% - 48px);
  grid-template-rows: auto auto 1fr;
}

.project-list {
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
export default {
  data: () => ({}),
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
};
</script>
