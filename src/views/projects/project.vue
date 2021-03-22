<template>
  <v-container class="content" fluid>
    <v-toolbar flat dense class="content-nav">
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <deleteProject :title="title" />
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="`/projects/${title}/urls`">SURVEY URLS</v-tab>
          <v-tab :to="`/projects/${title}/others`">Other</v-tab>
        </v-tabs>
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
export default {
  computed: {
    title() {
      return this.$route.params.sn;
    },
  },
  components: {
    deleteProject,
  },
};
</script>
