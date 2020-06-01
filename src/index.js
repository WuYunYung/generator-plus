import Vue from 'vue'
import cpmNavbar from './vue/cpmNavbar.vue'
import cpmMain from './vue/cpmMain.vue'
import cpmFooter from './vue/cpmFooter.vue'

new Vue({
  el:'#app',
  template:`
    <div class="d-flex flex-column body">
      <cpmNavbar/>
      <cpmMain/>
      <cpmFooter/>
    </div>
  `,
  components:{
    cpmNavbar,
    cpmMain,
    cpmFooter
  }
});

require('./css/style.css')
require('./css/bootstrap.min.css')