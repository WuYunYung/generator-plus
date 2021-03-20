<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app expand-on-hover>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense flat>
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
html{
  overflow: auto;
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
      { title: "Projects", icon: "mdi-home", to: "/projects" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  mounted: () => {
    store.commit("init");
  },
};
</script>
