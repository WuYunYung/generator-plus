<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">JN</th>
          <th scope="col">Name</th>
          <th scope="col">SN</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in results"
          :key="index"
        >
          <td scope="row">{{ item.jn }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sn }}</td>
          <td>
            <span class="badge badge-secondary">{{ item.status }}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-outline-dark">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
class Item {
  constructor(sn, jn, name, status, date) {
    this.sn = sn;
    this.jn = jn;
    this.name = name;
    this.status = status;
    this.date = date;
  }
}
export default {
  props: {
    projects: Array,
    serach: String,
  },

  computed: {
    items() {
      return Object.entries(this.projects).map((el) => {
        return new Item(el[0], ...el[1].split("&"));
      });
    },
    results() {
      if (!this.serach) return this.items;
      const reg = new RegExp(this.serach, "gi");
      return this.items.filter((el) => {
        return Object.entries(el)
          .map((el) => {
            return reg.test(el[1]);
          })
          .reduce((a, b) => a || b);
      });
    },
  },
};
</script>