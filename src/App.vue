<template>
  <article id="app">
    <router-view id="header" name="header"></router-view>
    <router-view id="nav" name="nav"></router-view>
    <router-view></router-view>
  </article>
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "header header"
    "aside main";
}

#app > #header {
  grid-area: header;
}
#app > #nav {
  grid-area: aside;
}
#app > main {
  grid-area: main;
}
</style>

<script>
import router from "./router";
export default {
  router,
  // mounted(){
  //   this.$store.commit('initProjects')
  // }
}
</script>