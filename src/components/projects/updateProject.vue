<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        small
        color="success"
        depressed
        text
        @click="autofill"
      >
        <v-icon>mdi-pencil</v-icon>
        update
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Update project</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Cint number*"
                :counter="7"
                required
                v-model="sn"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Job number"
                v-model="jn"
                :counter="9"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                :items="['APAC', 'SELF', 'DEV', 'RU']"
                label="Server*"
                v-model="server"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="12">
              <v-text-field label="Project name" v-model="name"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <small>*indicates required field</small>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="gray" text @click="close">Close</v-btn>
        <v-btn color="green" text @click="submit" :disabled="!valid"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    project: Object,
  },
  mounted() {
    this.autofill();
  },
  data: () => ({
    dialog: false,
    show: true,
    sn: "",
    jn: "",
    name: "",
    server: "APAC",
  }),
  computed: {
    projectItem() {
      return {
        sn: this.sn,
        jn: this.jn,
        name: this.name,
        server: this.server,
      };
    },
    valid() {
      for (const key in this.project) {
        if (this.project[key] !== this[key]) return true;
      }
      return false;
    },
    ...mapGetters("Projects", {
      snList: "projectsCintNumberList",
    }),
  },
  methods: {
    autofill() {
      this.sn = this.project.sn;
      this.jn = this.project.jn;
      this.name = this.project.name;
      this.server = this.project.server;
    },
    reset() {
      this.show = "true";
      this.autofill();
      this.$refs.form.resetValidation();
    },
    submit() {
      const project = {
        ...this.projectItem,
      };
      this.update(project);
      this.close();
    },
    close() {
      this.reset();
      this.dialog = false;
    },
    ...mapActions("Projects", {
      update: "update",
    }),
  },
};
</script>
