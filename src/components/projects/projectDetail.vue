<template>
  <div class="flex">
    <div
      v-for="(item, index) in details"
      :key="index"
      class="flex flex-col xl:flex-row align-baseline"
    >
      <div class="text-xs font-bold xl:text-sm">{{ item.title }}:</div>
      <div class="text-xs text-gray-500 xl:px-1">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  computed: {
    title() {
      return this.$route.params.sn;
    },
    details() {
      return [
        { title: "Job number", text: this.project.jn },
        { title: "Project name", text: this.project.name },
        { title: "Cint number", text: this.title },
        { title: "Server", text: this.project.server },
      ];
    },
  },
};
</script>
