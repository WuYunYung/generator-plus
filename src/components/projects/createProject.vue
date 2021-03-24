<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" depressed text>
        New
        <v-icon right>mdi-plus-box</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">New project</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-expand-transition>
        <v-card-text v-show="show">
          <v-text-field
            v-model="title"
            clearable
            label="Parse your Email title"
            type="text"
          >
            <v-tooltip bottom slot="append">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
              </template>
              Past your email title and autofill this form.
            </v-tooltip>
            <template v-slot:append-outer>
              <v-btn offset-y @click="analyze" text small color="blue">
                <v-icon left>mdi-pencil</v-icon>Pares
              </v-btn>
            </template>
          </v-text-field>
        </v-card-text>
      </v-expand-transition>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Cint number*"
                :counter="7"
                :rules="rules"
                required
                v-model="sn"
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
  data: () => ({
    dialog: false,
    show: true,
    title: "",
    sn: "",
    jn: "",
    name: "",
    server: "APAC",
  }),
  computed: {
    project() {
      return {
        sn: this.sn,
        jn: this.jn,
        name: this.name,
        server: this.server,
      };
    },
    rules() {
      return [
        (v) => /\d{7}/.test(v) || `SN must be 7 digits`,
        (v) => !this.snList.includes(v) || `Project has been created!`,
      ];
    },
    valid() {
      return /\d{7}/.test(this.sn) && !this.snList.includes(this.sn);
    },
    ...mapGetters("Projects", {
      snList: "projectsCintNumberList",
    }),
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.title = "";
      this.sn = "";
      this.jn = "";
      this.name = "";
      this.server = "APAC";
      this.show = "true";
    },
    analyze() {
      let title = this.title;
      let jn = title.match(/(?<!\d)\d{9}(?!\d)/)?title.match(/(?<!\d)\d{9}(?!\d)/)[0]:'';
      let sn = title.match(/(?<!\d)\d{7}(?!\d)/)?title.match(/(?<!\d)\d{7}(?!\d)/)[0]:'';
      let name = title
        .replace(jn, "")
        .replace(sn, "")
        .replace(/\d+/, "")
        .replace(/_|-|C*#C*|SN|JN|\[.*\]|.+:/g, " ")
        .replace(/\s+/, " ")
        .trim();

      this.sn = sn;
      this.jn = jn;
      this.name = name;
      this.show = false;
    },
    submit() {
      const route = `/projects/${this.sn}`;
      const project = {
        ...this.project,
      };
      console.log(project);
      this.create(project);
      this.$router.push(route);
      this.close();
    },
    close() {
      this.reset();
      this.dialog = false;
    },
    ...mapActions("Projects", {
      create: "create",
    }),
  },
};
</script>
