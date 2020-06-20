<template>
  <div class="g-navbar">
    <div class="navbar navbar-expand navbar-light">
      <div class="container">
        <div class="navbar-brand">
          <!-- <span>Generator</span> -->
          <span>
            Generator
            <sup class="text-warning">
              <b>+</b>
            </sup>
          </span>
        </div>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav mr-auto g-nav">
            <router-link to="/links" class="g-item nav-item nav-link active" replace>Links</router-link>
            <span class="g-item nav-item nav-link disabled">Commands</span>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from "../router";
export default {
  router
};
</script>

<style scoped>
.g-navbar {
  padding-bottom: 2rem;
  flex: 1;
}
.g-nav{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: baseline;
}
.g-item{
  box-sizing: border-box;
  margin: 0.25rem 1.2rem 0 1.2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  transition: .5s;
}
.g-item:hover{
  background: #EAECEE ;
}
</style>