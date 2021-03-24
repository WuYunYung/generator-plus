<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="delete"
        v-bind="attrs"
        v-on="on"
        small
        color="error"
        depressed
        text
      >
        <v-icon>mdi-delete</v-icon>
        Delete</v-btn
      >
    </template>
    <v-card>
      <v-card-title class="headline">
        Are you sure? 🤨
      </v-card-title>
      <v-card-text>Delete {{ title }}</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="gray" text @click="dialog = false" small depressed>
          cancel
        </v-btn>
        <v-btn color="error" flat @click="deleteClick" small depressed>
          <v-icon>mdi-delete</v-icon>
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    title: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    sn() {
      return this.title.replace(/C/, "");
    },
  },
  methods: {
    ...mapActions("Projects", {
      deleteAction: "delete",
    }),
    deleteClick() {
      this.dialog = false;
      this.deleteAction(this.sn);
      this.$router.replace("/projects");
    },
  },
};
</script>
