<template>
  <div id="app">
    <navbar />
    <g-footer />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import gFooter from "./components/gFooter.vue";

export default {
  name: "App",
  components: {
    navbar,
    gFooter
  }
};
</script>

<style>
body,html{
  width: 100vw;
  min-height: 100vh;
  background-color: #F8F9F9 ;
}
#app{
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
