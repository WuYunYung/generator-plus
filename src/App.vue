<template>
  <div id="app">
    <g-navbar />
    <!-- <g-footer /> -->
  </div>
</template>

<script>
import gNavbar from "./components/gNavbar.vue";
// import gFooter from "./components/gFooter.vue";

export default {
  name: "App",
  components: {
    gNavbar,
    // gFooter
  }
};
</script>

<style>
body,html{
  width: 100vw;
  min-height: 100vh;
}
#app{
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
