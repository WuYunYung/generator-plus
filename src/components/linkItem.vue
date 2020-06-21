<template>
  <div>
    <div class="form-group animated fadeIn" v-if="clink!='#'">
      <span>{{cname}}:</span>
      <div class="input-group input-group-sm">
        <input :id="cid" type="text" class="form-control" :value="clink" readonly />
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