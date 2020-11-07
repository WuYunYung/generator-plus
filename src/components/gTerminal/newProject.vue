<template>
  <div>
    <button
      class="btn btn-outline-success text-nowrap"
      id="new-project"
      data-toggle="modal"
      data-target="#new-project-modal"
    >
      New Project
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="new-project-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="new-project-modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Project</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label"
                >SN:</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control form-control"
                    id="SN"
                    v-model.number="sn"
                    placeholder="Cint number"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="JN"
                  class="col-sm-2 col-form-label"
                >JN:</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="JN"
                    v-model.number="jn"
                    placeholder="JN"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="name"
                  class="col-sm-2 col-form-label col-form-label"
                >Name</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control form-control"
                    id="name"
                    v-model.trim="name"
                    placeholder="Name"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="server"
                  class="col-sm-2 col-form-label col-form-label"
                >Server</label>
                <div class="col-sm-10">
                  <select
                    class="custom-select"
                    id="inputGroupSelect01"
                    v-model="serve"
                  >
                    <option value="1">APAC</option>
                    <option value="2">BUILD</option>
                    <option value="3">DEV</option>
                    <option value="4">RU</option>
                    <option value="5">PD</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="status"
                  class="col-sm-2 col-form-label col-form-label"
                >Status</label>
                <div class="col-sm-10">
                  <select
                    class="custom-select"
                    id="inputGroupSelect01"
                    v-model="status"
                  >
                    <option value="1">Draft</option>
                    <option value="2">Live</option>
                    <option value="3">Close</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >Close</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="save"
            >Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sn: "",
      jn: "",
      name: "",
      serve: 1,
      status: 1,
      date: 0,
    };
  },
  watch: {
    sn(newSn) {
      switch (this.status) {
        case 1:
        case 4:
        case 5:
          this.sn = newSn.replace(/[^0-9]/gi, "");
          break;
        default:
          break;
      }
    },
  },
  methods: {
    save() {
      this.date = Date.now();
      this.$emit("save", {
        sn: this.sn,
        jn: this.jn,
        name: this.name,
        serve: this.serve,
        status: this.status,
        date: this.date,
      });
    },
  },
};
</script>