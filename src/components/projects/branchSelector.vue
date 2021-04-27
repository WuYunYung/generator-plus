<template>
  <!-- <v-select
    :items="items"
    color="purple"
    label="Branch"
    clear-icon
    chips
    dense
    solo
    eager
    small-chips
    :height="'10px'"
    hide-details
    hide-selected
    item-text="name"
    item-value="branch"
    prepend-inner-icon="mdi-source-branch"
  >
    <template v-slot:prepend-item>
      <v-text-field
        class="max-w-full"
        label="New branch:"
        append-icon="mdi-plus"
        @click:append="itemClick(0)"
        dense
        solo
        flat
        hide-details
      ></v-text-field>
    </template>
  </v-select> -->
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="indigo" dark v-bind="attrs" v-on="on" depressed text small>
        <v-icon>mdi-source-branch</v-icon>
        Branch
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              class="max-w-full"
              label="New branch:"
              dense
              solo
              flat
              hide-details
            ></v-text-field>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              dark
              :class="fav ? 'red--text' : ''"
              icon
              @click="fav = !fav"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="message" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Enable messages</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="hints" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Enable hints</v-list-item-title>
        </v-list-item>
      </v-list>

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
    selectIndex: 0,
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  computed: {
    items() {
      return [...this.branchs];
    },
    currentBranch() {
      return this.items[this.selectIndex].name;
    },
  },
  methods: {
    newBranch() {},
  },
};
</script>
