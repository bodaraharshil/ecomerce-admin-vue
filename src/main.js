import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './pages/Login/Login.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path:"/pages/login",component:Login},
    {path:"/",component:Home}
];

let router = new VueRouter({
    routes,
    mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
