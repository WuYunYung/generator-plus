<template>
  <div id="app">
    <navbar/>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue"

export default {
  name: 'App',
  components: {
    navbar
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
    background-image: linear-gradient(#ffffff 90%,#cccccc 0);
}
#app{
  flex:1;
}
</style>
