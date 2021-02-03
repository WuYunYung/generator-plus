<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <h1 class="header-logo navbar-brand col-md-3 col-lg-2 me-0 px-3">Generator<sup>+</sup></h1>
    <nav class="header-nav collapse navbar-collapse">
      <ul class="links navbar-nav px-3">
        <li class="nav-item text-nowrap"><router-link class="nav-link" to="/">主页</router-link></li>
        <li class="nav-item text-nowrap"><router-link class="nav-link" to="/">你瞅啥</router-link></li>
        <li class="nav-item text-nowrap"><router-link class="nav-link" to="/">瞅你咋地</router-link></li>
      </ul>
      <form class="form-inline features">
        <button class="btn btn-outline-success my-2 my-sm-0">新建项目</button>
      </form>
    </nav>
  </header>
</template>

<style scoped>
header{
  background: #383b3f;
  width: 100%;
  height: 100%;
  padding:0;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 50px;
}

.header-logo{
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  font-size:20px;
  margin: 0;
}

.header-nav{
  background: #383b3f;
  padding: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav >ul{
  height: 100%;
  display:flex;
  align-items: center;
  margin: 0;
  padding:0;
}

.header-nav li{
  margin:0 10px;
  list-style-type: none;
}

.features{
  justify-content: flex-end;
}

.links{
  justify-content: flex-start;
}

.navbar-nav{
  flex-direction: row;
}
</style>