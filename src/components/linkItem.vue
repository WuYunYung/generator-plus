<template>
  <div>
    <div class="form-group animated fadeIn" v-if="clink!='#'">
      <span>{{cname}}:</span>
      <div class="input-group input-group-sm">
        <input
          :id="cid"
          type="text"
          class="form-control text-truncate"
          :value="clink"
          readonly
          data-toggle="modal"
          :data-target="'#modal'+cid"
        />
        <div class="input-group-append">
          <a class="btn btn-outline-secondary" :href="clink" target="_blank">Go</a>
          <button
            class="btn btn-outline-secondary clipboard"
            :data-clipboard-target="'#'+cid"
            type="button"
            title="Copy!"
          >
            <i class="fa fa-copy"></i>
          </button>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      :id="'modal'+cid"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{cname}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body user-select-all">{{clink}}</div>
          <div class="modal-footer">
            <a
              class="btn btn-outline-secondary"
              :href="clink"
              target="_blank"
            >Go</a>
            <button
              class="btn btn-outline-secondary clipboard"
              :data-clipboard-target="'#'+cid"
              type="button"
              title="Copy!"
              data-dismiss="modal"
            >
              <i class="fa fa-copy"></i>
            </button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cid: String,
    cname: String,
    clink: String
  }
};
</script>