import Vue from 'vue'
import App from './App.vue'
import ClipboardJS from "clipboard";
import $ from 'jquery'

import animate from 'animate.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap'

Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new ClipboardJS('.btn');

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(function () {
  $('[data-toggle="popover"]').popover();
});
