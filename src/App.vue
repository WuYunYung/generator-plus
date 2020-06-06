<template>
  <div id="app">
    <main-panel/>
  </div>
</template>

<script>
import mainPanel from "./components/mainPanel.vue";

export default {
  name: 'App',
  components: {
    mainPanel
  }
}
</script>

<style>
html {
    height: 100%;
}

body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
#app{
  flex:1;
}
</style>
