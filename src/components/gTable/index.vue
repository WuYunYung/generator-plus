<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">JN</th>
          <th scope="col">Name</th>
          <th scope="col">SN</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <project-item
          v-for="(item,index) in result"
          :key="index"
          :project="item"
          @deleteItem="deleteItem(item.sn)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import projectItem from "./projectItem";

export default {
  props: {
    projects: Array,
    serach: String,
  },
  computed: {
    result() {
      if (!this.serach) return this.projects;
      const reg = new RegExp(this.serach, "gi");
      return this.projects.filter((el) => {
        return Object.entries(el)
          .map((el) => {
            return reg.test(el[1]);
          })
          .reduce((a, b) => a || b);
      });
    },
  },
  components: {
    projectItem,
  },
  methods: {
    deleteItem(sn) {
      this.$emit("deleteItem", sn);
    },
  },
};
</script>