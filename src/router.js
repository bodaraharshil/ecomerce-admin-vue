import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes:[
        {
            path: '/pages/login',
            name: 'Login',
            component: () => import('./pages/Login/Login.vue'),
            meta: {
                rule: 'editor'
            }
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('./components/Home.vue'),
            meta: {
                rule: 'editor'
            }
        },

    ]
})

export default router;