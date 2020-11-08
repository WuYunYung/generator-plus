<template>
  <tr>
    <td scope="row">{{ project.jn }}</td>
    <td>{{ project.name }}</td>
    <td>{{ project.sn }}</td>
    <td>
      <span class="badge badge-secondary">{{status }}</span>
    </td>
    <td>
      <button
        class="btn btn-sm btn-outline-dark"
        @click="deleteItem"
      >Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      statusTemplate: ["Draft", "Live", "Close"],
    };
  },
  computed: {
    status() {
      return this.statusTemplate[this.project.status - 1];
    },
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    },
  },
};
</script>