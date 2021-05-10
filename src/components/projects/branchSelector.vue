<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="indigo" dark v-bind="attrs" v-on="on" depressed text small>
        <v-icon>mdi-source-branch</v-icon>
        {{ currentBranch }}
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              class="max-w-full"
              label="New branch:"
              v-model="newBranchContent"
              dense
              solo
              flat
              hide-details
            ></v-text-field>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              :disabled="disableNewButton"
              icon
              @click="newBranch"
              color="indigo"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-radio-group column v-model="currentBranch" class="mx-5">
        <v-radio
          v-for="(item, index) in branchs"
          :key="index"
          :label="item.name"
          color="indigo"
          :value="item.name"
        ></v-radio>
      </v-radio-group>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text @click="menu = false">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="menu = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    branchs: Array,
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    currentBranch: "main",
    newBranchContent: "",
  }),
  computed: {
    items() {
      return [...this.branchs];
    },
    disableNewButton() {
      return this.newBranchContent.length === 0;
    },
  },
  methods: {
    newBranch() {
      this.branchs.push({
        name: this.newBranchContent,
        branch: `/${this.newBranchContent}`,
      });
      this.newBranchContent = "";
    },
  },
};
</script>
