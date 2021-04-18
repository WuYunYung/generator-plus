<template>
  <v-btn
    v-show="showChecker"
    depressed
    color="warning"
    text
    small
    :href="checker"
    target="_blank"
    link
  >
    <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>
    Checker
  </v-btn>
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
    checker() {
      return `https://surveys.globaltestmarket.com/survey/lib/local/surveychecker/v2349?checkPath=apac/${this.title}`;
    },
    showChecker() {
      const server = this.project.server;
      return server === "APAC";
    },
  },
};
</script>
