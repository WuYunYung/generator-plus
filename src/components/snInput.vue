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
          <span class="dropdown-item" href="#" v-for="item of serverList" :key="item" :value="item" @click="serverClick(value)">{{item}}</span>
        </div>
      </div>
      <input
        type="text"
        class="form-control"
        v-model="sn"
        :class="{'is-valid':snComputed}"
        placeholder="Please type in your SN number:"
      />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      serverList:['apac','selfserve','dev'],
      serverCheckIndex:0
    }
  },
  methods:{
    serverClick(value){
      this.serverCheckIndex=value
    }
  }
};
</script>