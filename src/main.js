import Vue from 'vue'
import App from './App.vue'
import router from './router.js';

// Vuesax Component Framework
import Vuesax from "vuesax";
// import "material-icons/iconfont/material-icons.css"; //Material Icons
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
