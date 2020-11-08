<template>
  <div
    id="app"
    class="container"
  >
    <span class="display-4">Generator <sup>+</sup></span><small>Wilson Wu</small>
    <hr />
    <g-terminal
      :projects="projects"
      @updateSerach="onSerachUpdate"
      @save="save"
    />
    <g-table
      :projects="projects"
      :serach="serach"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import gTerminal from "./components/gTerminal";
import gTable from "./components/gTable";

export default {
  name: "App",
  components: {
    gTerminal,
    gTable,
  },
  mounted: function () {
    this.projects = localStorage.getItem("projects")
      ? JSON.parse(localStorage.getItem("projects"))
      : [];
  },
  data() {
    return {
      serach: "",
      projects: [],
    };
  },
  methods: {
    onSerachUpdate(value) {
      this.serach = value;
    },
    save(data) {
      this.projects.push(data);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    },
    deleteItem(sn) {
      this.projects = this.projects.filter((el) => el.sn != sn);
      localStorage.setItem("projects", JSON.stringify(this.projects));
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