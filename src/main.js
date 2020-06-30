import Vue from 'vue'
import App from './App.vue'
import animate from 'animate.css' 
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
