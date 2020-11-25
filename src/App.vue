<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>

<script>
export default {
  mounted(){
    this.$store.commit('initProjects')
  }
}
</script>