<template>
  <v-container fluid class="projects">
    <v-card width="300" class="nav-bar">
      <v-toolbar flat dense>
        <v-toolbar-title>Projects:</v-toolbar-title>
        <v-spacer></v-spacer>
        <new-project />
      </v-toolbar>
      <!-- <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-plus-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              New project
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-divider></v-divider>
      <v-list dense two-line class="project-list">
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in projects" :key="i" link :to="item.to">
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-container class="project-content">
      <router-view></router-view>
    </v-container>
  </v-container>
</template>

<style scoped>
.not-find {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: grid;
  height: calc(100% - 48px);
  grid-template-rows: auto auto 1fr;
}

.project-list {
  overflow: auto;
}

.project-content{
  grid-area: content;
}
</style>

<script>
import newProject from "./newProject";
import store from "../../store/store";
export default {
  data: () => ({
  }),
  computed: {
    projects: () => {
      const projects = store.state.projects;
      if (projects.lenght === 0) return [];
      const items = [];
      projects.forEach((element) => {
        items.push({
          title: `C${element.sn}`,
          subtitle: `${element.jn} - ${element.name}`,
          to:`/projects/C${element.sn}`
        });
      });
      return items;
    },
  },
  components: {
    newProject,
  },
};
</script>
