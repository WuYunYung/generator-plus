<template>
  <div class="g-terminal">
    <input
      type="text"
      class="form-control"
      placeholder="Enjoy your work time~"
      aria-label="Enjoy your work time~"
      aria-describedby="button-addon2"
      v-model="serach"
      autofocus
      @input="serachInput"
    />
    <new-project
      @save="save"
      :key="refresh"
      :snList="snList"
    />
  </div>
</template>

<script>
import newProject from "./newProject.vue";

export default {
  props: {
    projects: Array,
  },
  computed: {
    snList() {
      return this.projects.map((el) => el.sn);
    },
  },
  components: {
    newProject,
  },
  data() {
    return {
      serach: "",
      refresh: true,
    };
  },
  methods: {
    serachInput() {
      this.$emit("updateSerach", this.serach);
    },
    save(data) {
      this.$emit("save", data);
      this.refresh = !this.refresh;
    },
  },
};
</script>

<style scoped>
.g-terminal {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
}
.g-terminal > form-control {
  flex: 1;
}
input {
  margin-right: 10px;
}
</style>