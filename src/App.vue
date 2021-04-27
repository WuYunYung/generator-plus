<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app mini-variant>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense flat class="app-nav-bar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Generator<sup>+</sup></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
html {
  overflow-y: auto !important;
  height: 100vh;
  width: 100vw;
}
</style>

<style scoped>
.app-nav-bar {
  border-bottom: 1px solid #e0e0e0 !important;
}
</style>

<script>
import router from "./router";
import store from "./store/store";
export default {
  router,
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/home" },
      { title: "Projects", icon: "mdi-view-list", to: "/projects" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  mounted: () => {
    store.dispatch("Projects/initialize");
  },
};
</script>
