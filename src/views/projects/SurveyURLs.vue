<template>
  <v-card flat>
    URLS
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Nature",
        icon: "mdi-nature",
      },
      {
        text: "Nightlife",
        icon: "mdi-glass-wine",
      },
      {
        text: "November",
        icon: "mdi-calendar-range",
      },
      {
        text: "Portland",
        icon: "mdi-map-marker",
      },
      {
        text: "Biking",
        icon: "mdi-bike",
      },
    ],
    loading: false,
    search: "",
    selected: [],
  }),

  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter((item) => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
  },

  watch: {
    selected() {
      this.search = "";
    },
  },

  methods: {
    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
