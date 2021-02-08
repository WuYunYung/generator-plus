<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> New project </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">New project</span>
      </v-card-title>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-container>
            <v-text-field
              v-model="title"
              clearable
              label="Parse your Email title"
              type="text"
            >
              <template v-slot:prepend>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                  </template>
                  Past your email title and autofill this form.
                </v-tooltip>
              </template>
              <template v-slot:append-outer>
                <v-btn style="top: -12px" offset-y @click="analyze"
                  >Pares</v-btn
                >
              </template>
            </v-text-field>
          </v-container>
        </div>
      </v-expand-transition>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Cint number*"
                :counter="7"
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
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
    show: false,
    title: "",
    sn: "",
    jn: "",
    name: "",
    server: "APAC",
  }),
  computed: {
    isValid() {
      return !!this.sn.length && !this.snIsInvalid;
    },
    snIsInvalid() {
      return this.snList.find((i) => i === this.sn);
    },
    snList() {
      return this.$store.getters.projectsCintNumberList;
    },
    project() {
      return {
        sn: this.sn,
        jn: this.jn,
        name: this.name,
        server: this.server,
      };
    },
  },
  methods: {
    reset() {
      this.title = "";
      this.sn = "";
      this.jn = "";
      this.name = "";
      this.server = "APAC";
    },
    analyze() {
      let title = this.title;
      let jn = title.match(/\d{9}/)[0];
      let name = title.replace(/\d{9}/, "");
      let sn = name.match(/\d{7}/)[0];
      name = name
        .replace(/\d{7}/, "")
        .replace(/_|-|C*#C*|SN|JN|\[.*\]/g, " ")
        .replace(/s+/, "")
        .trim();
      this.sn = sn;
      this.jn = jn;
      this.name = name;
    },
    submit() {
      // const route = `/${this.sn}`;
      const project = {
        ...this.project,
      };
      console.log(project);
      this.$store.commit("create", project);
      // this.$router.push(route);
      this.close()
    },
    close(){
      this.reset();
      this.dialog = false;
    }
  },
};
</script>