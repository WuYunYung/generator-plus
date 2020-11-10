import Vue from 'vue'
import App from './App.vue'
// import ClipboardJS from "clipboard";
// import $ from 'jquery'
import ElementUI from 'element-ui';

// import animate from 'animate.css' 
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// import 'font-awesome/css/font-awesome.css'
// import 'bootstrap'

import router from './router'
import store from './store'

// Vue.use(animate)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// new ClipboardJS('.btn');

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
// $(function () {
//   $('[data-toggle="popover"]').popover();
// });