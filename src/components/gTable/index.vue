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
          v-for="(item, index) in items"
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
export default {
  props: {
    projects: Object,
    serach: String,
  },

  computed: {
    items() {
      const dir = [];
      for (const el in this.projects) {
        if (this.serach) {
          const reg = new RegExp(this.serach, "gi");
          if (!(reg.test(el) || reg.test(this.projects[el]))) continue;
        }
        const props = this.projects[el].split("&"),
          title = ["jn", "name", "status", "date"],
          item = {};
        item["sn"] = el;
        for (let i = 0; i < props.length; i++) {
          item[title[i]] = props[i];
        }
        dir.push(item);
      }
      return dir;
    },
  },
};
</script>