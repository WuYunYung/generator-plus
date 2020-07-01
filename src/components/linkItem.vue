<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{cname}}</h5>
      <div class="btn btn-secondary">show</div>
      <div class="btn btn-secondary">go</div>
      <div class="btn btn-secondary">copy</div>
    </div>
    <div class="form-group animated fadeIn" v-if="clink!='#'">
      <div class="input-group input-group-sm">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary">{{cname}}</button>
        </div>
        <input
          :id="cid"
          type="text"
          class="form-control"
          :value="clink"
          readonly
          style="display:none"
        />
        <div class="input-group-append">
          <a class="btn btn-outline-secondary" :href="clink" target="_blank"><i class="fa fa-arrow-right"> Go</i></a>
          <button
            class="btn btn-outline-secondary clipboard"
            :data-clipboard-target="'#'+cid"
            type="button"
            title="Copy!"
          >
            <i class="fa fa-copy"> Copy</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-group{
  display: flex;
  flex-direction: row;
  justify-content: right;
}
.input-group-prepend{
  flex:1;
  text-align:left;
}
.input-group-prepend *{
  width: 100%;
}
</style>

<script>
export default {
  props: {
    cid: String,
    cname: String,
    clink: String
  }
};
</script>