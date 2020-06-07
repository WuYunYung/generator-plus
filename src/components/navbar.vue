<template>
  <div>
    <div class="navbar navbar-expand navbar-dark bg-dark shadow-sm">
      <div class="container">
        <div class="navbar-brand shadow-sm">
          <!-- <span>Generator</span> -->
          <span>
            Generator
            <sup class="text-warning">
              <b>+</b>
            </sup>
          </span>
        </div>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav mr-auto">
              <router-link to="/links" class="nav-item nav-link active"
              replace
              >Links</router-link>
            <span class="nav-item nav-link disabled">
              Commands
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../router'
export default {
	router
};
</script>