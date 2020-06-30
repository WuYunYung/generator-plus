import Vue from 'vue'
import App from './App.vue'
import ClipboardJS from "clipboard";

import animate from 'animate.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new ClipboardJS('.btn');
