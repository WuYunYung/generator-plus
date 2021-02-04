<template>
  <header id="header"
    class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow"
  >
    <h1 class="header-logo navbar-brand col-md-3 col-lg-2 me-0 px-3">
      Generator<sup>+</sup>
    </h1>
    <input
      class="form-control form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <nav class="header-nav collapse navbar-collapse">
      <ul class="links navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link class="nav-link" to="/home">主页</router-link>
        </li>
        <li class="nav-item text-nowrap">
          <router-link class="nav-link" to="/create">新建项目</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
#header {
  width: 100%;
  height: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 50px;
}

.header-logo {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  margin: 0;
}

.header-nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header-nav > ul {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.header-nav li {
  margin: 0 10px;
  list-style-type: none;
}

.links {
  justify-content: flex-start;
}

.navbar-nav {
  flex-direction: row;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  background: #383b3f;
  color: #fff;
  background-color: #ffffff1a;
  border-color: #ffffff1a;
}

.form-control-dark:focus {
  border-color: #0000;
  background: #fff;
  color: #000;
  box-shadow: 0 0 0 3px rgb(255 255 255 / 25%);
  transition: 0.2;
}
</style>