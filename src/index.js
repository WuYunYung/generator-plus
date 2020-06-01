import Vue from 'vue'
import app from './vue/app.vue'

new Vue({
  el:'#app',
  template:'<app/>',
  components:{
    app
  }
});

require('./css/style.css')
require('./css/bootstrap.min.css')