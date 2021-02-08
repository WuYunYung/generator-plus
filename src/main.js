import Vue from 'vue'
import App from './App.vue'
// import ClipboardJS from "clipboard";
// import $ from 'jquery'
// import ElementUI from 'element-ui';

// import animate from 'animate.css' 
// import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.css'
// import 'bootstrap'

// Vue.use(animate)
// Vue.use(ElementUI);
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

import store from './store/store'
import vuetify from './plugins/vuetify';

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')

// new ClipboardJS('.btn');

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
// $(function () {
//   $('[data-toggle="popover"]').popover();
// });
