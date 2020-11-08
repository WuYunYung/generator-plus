<template>
  <div>
    <button
      class="btn btn-outline-success text-nowrap"
      id="new-project"
      data-toggle="modal"
      data-target="#new-project-modal"
      @click="initData"
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
                    autocomplete="off"
                    class="form-control form-control"
                    :class="{
                      'is-invalid':!snIsValid&&this.serve!='3',
                      'is-valid':snIsValid&&this.serve!='3'
                    }"
                    id="SN"
                    v-model="sn"
                    placeholder="Cint number"
                  >
                  <div
                    class="invalid-feedback"
                    v-if="snComment"
                  >
                    {{snComment}}
                  </div>
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
                    autocomplete="off"
                    class="form-control"
                    id="JN"
                    v-model="jn"
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
                    autocomplete="off"
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
              :disabled="!isValid"
              data-dismiss="modal"
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
  props: {
    snList: Array,
  },
  data() {
    return {
      sn: "",
      jn: "",
      name: "",
      serve: 1,
      status: 1,
      date: 0,
      snComment: "",
    };
  },
  computed: {
    snIsValid() {
      if (this.serve == 3) return true;
      const lenghtIsValid = () => {
        if (this.sn.length < 6) {
          this.snComment = "The Cint Number must be greater than 6 digits.";
          return false;
        }
        return true;
      };
      const isUnique = () => {
        for (const el of this.snList) {
          if (el === this.sn) {
            this.snComment = "The Cint Number must be Unique.";
            return false;
          }
        }
        return true;
      };
      return lenghtIsValid() && isUnique();
    },
    isValid() {
      return !!this.snIsValid && !!this.name ? true : false;
    },
  },
  watch: {
    sn(newSn) {
      if (this.serve != 3) {
        this.sn = newSn.replace(/[^0-9]/gi, "");
      } else {
        this.sn = newSn;
      }
    },
    jn(newJn) {
      this.jn = newJn.replace(/[^0-9]/gi, "");
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
      this.initData();
    },
    initData() {
      this.sn = "";
      this.jn = "";
      this.name = "";
      this.serve = 1;
      this.status = 1;
      this.date = 0;
      this.snComment = "";
    },
  },
};
</script>