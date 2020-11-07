<template>
  <div
    id="app"
    class="container"
  >
    <span class="display-4">Generator <sup>+</sup></span><small>Wilson Wu</small>
    <hr />
    <g-terminal
      @updateSerach="onSerachUpdate"
      @save="save"
    />
    <!-- <g-table
      :projects="projects"
      :serach="serach"
    /> -->
  </div>
</template>

<script>
import gTerminal from "./components/gTerminal";
// import gTable from "./components/gTable";

const projects = [];

export default {
  name: "App",
  components: {
    gTerminal,
    // gTable,
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
    save(data) {
      this.projects.push(data);
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