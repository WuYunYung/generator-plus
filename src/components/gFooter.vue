<template>
  <div class="footer mt-auto py-3">
    <div class="container content text-muted">
      <div class="site">
        <div class="text-muted" style="padding-right:1rem;">Website by</div>
        <div class="name">@Internal Innovation Team</div>
      </div>
      <div class="site">
        <a
          class="item text-muted text-decoration-none"
          href="https://github.com/Kantar-Profiles-GZ-Innovation-Team/generator-plus"
          target="_blank"
        >
          <i class="fa fa-github"></i> github
        </a>
        <div class="item">
          <i class="fa fa-bars"></i> About
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.name {
  position: relative;
  transition: 0.5s;
  color: #0000;
}
.name::before {
  width: fit-content;
  position: absolute;
  content: "@Internal Innovation Team";
  color: #6c757d;
  left: 0;
  transition: 0.5s;
}
.name:hover::before {
  left: 50%;
  color: #0000;
}
.name::after {
  width: fit-content;
  position: absolute;
  content: "Innovat or nothing";
  left: 0;
  color: #0000;
  transition: 0.5s;
}
.name:hover::after {
  left: 50%;
  color: #6c757d;
}
.footer {
  height: 20vh;
}
.content {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}
.item {
  width: fit-content;
  box-sizing: border-box;
  flex: 1;
  padding: 0.2rem 1.5rem;
  margin: 0.5rem;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
}
.item::before {
  position: absolute;
  content: "";
  left: -100%;
  bottom: 0;
  width: 100%;
  height: 5%;
  background-color: #0000;
  transition: 0.5s;
}
.item:hover::before {
  left: 0;
  background-color: #6c757d;
}
.item::after {
  content: "➔";
  color: #0000;
  transition: 0.5s;
  position: absolute;
  right: 0;
}
.item:hover:after {
  content: "➔";
  color: #6c757d;
}
.site {
  min-width: fit-content;
  flex: 1;
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item > i {
  padding-right: 1.5rem;
}
</style>