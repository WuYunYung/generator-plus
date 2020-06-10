<template>
  <div class="form-group">
    <label>SN:</label>
    <div class="input-group input-group-sm">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{{serverList[serverCheckIndex]}}</button>
        <div class="dropdown-menu">
          <span
            class="dropdown-item"
            v-for="(item,index) of serverList"
            :key="item"
            :value="index"
            @click="serverClick(index)"
          >{{item}}</span>
        </div>
      </div>
      <input
        type="text"
        class="form-control"
        v-model="sn"
        :class="{'is-valid':snComputed}"
        @input="snTextInput"
        placeholder="Please type in your SN number:"
      />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    sn:String,
  },
  data() {
    return {
      serverList: ["apac", "selfserve", "dev"],
      serverCheckIndex: 0,
    };
  },
  computed: {
    snComputed() {
      if (this.serverCheckIndex != 2) {
        if (this.sn.length === 6) {
          return "/C" + this.sn;
        } else {
          return "";
        }
      } else {
        if (/(\d*[a-z][A-Z]*)*/.test(this.sn)) {
          return this.sn;
        } else {
          return "";
        }
      }
    }
  },
  methods: {
    serverClick(value) {
      this.serverCheckIndex = value;
    },
    snTextInput(item){
      this.$emit('sn-text-input',item)
    }
  },
  watch: {
    sn(val) {
      let str = val.replace(/[^\d]/g, "");
      if (this.serverCheckIndex != 2) {
        if (str.length > 6) {
          this.sn = str.substr(0, 6);
        }
      }
    }
  }
};
</script>