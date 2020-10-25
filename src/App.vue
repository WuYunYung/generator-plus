<template>
  <div
    id="app"
    class="container"
  >
    <span class="display-4">Generator <sup>+</sup></span><small>Wilson Wu</small>
    <hr />
    <g-terminal @updateSerach="onSerachUpdate" />
    <g-table
      :projects="projects"
      :serach="serach"
    />
  </div>
</template>

<script>
import gTerminal from "./components/gTerminal";
import gTable from "./components/gTable";

const projectsList = localStorage.getItem("projects").split(",");
const projects = {};
for (const el of projectsList) {
  projects[el] = localStorage.getItem(el);
}

export default {
  name: "App",
  components: {
    gTerminal,
    gTable,
  },
  data() {
    return {
      serach: "",
      projects,
    };
  },
  methods: {
    onSerachUpdate(value) {
      this.serach = value;
    },
  },
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>