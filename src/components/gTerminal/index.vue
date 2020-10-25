<template>
  <div>
    <div
      class="input-group"
      id="g-terminal"
    >
      <input
        type="text"
        class="form-control"
        placeholder="Enjoy your work time~"
        aria-label="Enjoy your work time~"
        aria-describedby="button-addon2"
        v-model="serach"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click="serachInput()"
        >
          Search
        </button>
        <button
          class="btn btn-outline-success"
          id="new-project"
        >
          New Project
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serach: "",
    };
  },
  methods: {
    serachInput() {
      this.$emit("updateSerach", this.serach);
    },
  },
};
</script>

<style scoped>
.input-group {
  margin: 20px auto;
}
</style>