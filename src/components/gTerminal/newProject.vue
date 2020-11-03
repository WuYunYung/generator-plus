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
                    type="email"
                    class="form-control"
                    id="JN"
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
                    type="email"
                    class="form-control form-control"
                    id="name"
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
                  >
                    <option
                      value="1"
                      selected
                    >APAC</option>
                    <option value="2">BUILD</option>
                    <option value="3">DEV</option>
                    <option value="3">RU</option>
                    <option value="3">PD</option>
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
                  >
                    <option
                      value="1"
                      selected
                    >Draft</option>
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
            >Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>