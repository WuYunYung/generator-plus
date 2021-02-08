<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Generator<sup>+</sup>
          </v-list-item-title>
          <v-list-item-subtitle>Wilcome!</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import router from "../router";

// export default {
//   router,
//   computed: {
//     projects() {
//       return this.$store.state.projects;
//     },
//   },
// };
</script>