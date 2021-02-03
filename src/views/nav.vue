<template>
  <nav class="pt-3 bg-light sidebar">
    <form class="features">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="搜索项目"
        aria-label="Search"
      />
    </form>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" to="/1">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/2">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/3">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/4">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/5">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/6">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/7">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/8">这是一个项目</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/9">这是一个项目</router-link>
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
}
.features{
  margin-bottom: 10px;
}
.nav{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y:auto;
}
</style>

<script>
import router from "../router";
export default {
  router,
};
</script>