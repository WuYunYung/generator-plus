<template>
  <v-container>
    <div v-if="projects.lenght === 0" class="not-find">
      <h1>No projects?</h1>
      <p>Create a new one.</p>
      <new-project />
    </div>
    <v-list two-line v-else>
      <template v-for="(item, index) in projects">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider v-else-if="item.divider" :key="index"></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
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
</style>

<script>
import newProject from "./newProject";
import store from "../../store/store";
export default {
  data: () => ({
    items: [
      { header: "Demo" },
      {
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
    ],
  }),
  computed: {
    projects: () => {
      const projects = store.state.projects;
      if (projects.lenght === 0) return [];
      const items = [];
      projects.forEach((element) => {
        items.push({
          title: `C${element.sn}`,
          subtitle: `${element.jn} - ${element.name} - ${element.sn}`,
        });
        items.push({ divider: true, inset: true });
      });
      items.pop();
      return items;
    },
  },
  components: {
    newProject,
  },
};
</script>