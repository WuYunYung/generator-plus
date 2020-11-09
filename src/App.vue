<template>
  <div id="app">
    <navbar />
    <div class="container">
      <g-terminal
        :projects="projects"
        @updateSerach="onSerachUpdate"
        @save="save"
      />
      <g-table :projects="projects" :serach="serach" @deleteItem="deleteItem" />
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import gTerminal from "./components/gTerminal";
import gTable from "./components/gTable";

export default {
  name: "App",
  components: {
    navbar,
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
</style>