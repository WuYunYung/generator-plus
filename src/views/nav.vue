<template>
  <nav class="pt-3 bg-light sidebar">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/1">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/2">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/3">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/4">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/5">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/6">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/7">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/8">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link rounded" to="/9">这是一个项目</router-link>
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
};
</script>