<template>
  <nav class="pt-3 bg-light sidebar">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="item in projects" :key="item"
       data-bs-toggle="tooltip" data-bs-placement="right" :title="`${item.jn} - ${item.name} - ${item.sn}`">
        <router-link class="nav-link rounded" :to="`/${item.sn}`">{{item.sn}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#nav {
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: inset -1px 0 0 rgb(0 0 0 / 10%);
}
.features {
  margin-bottom: 10px;
}
.nav {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
}
</style>

<script>
import router from "../router";

export default {
  router,
  computed:{
    projects() {
      return this.$store.state.projects;
    },
  }
};
</script>