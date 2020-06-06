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
}
#app{
  flex:1;
}
</style>
