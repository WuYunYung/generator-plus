<template>
  <div class="container-small">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link to="/links" class="nav-link">Links</router-link>
            </li>
            <li class="nav-item">
              <span class="nav-link disabled">Commands</span>
            </li>
            <li class="nav-item">
              <span class="nav-link disabled">About</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/Kantar-Profiles-GZ-Innovation-Team/generator-plus" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import router from "../router";
export default {
  router
};
</script>