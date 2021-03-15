import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)

const router = new Router({
    routes:[
        {
            path: '/login',
            name: 'page-login',
            component: () => import('./pages/Login/Login.vue'),
            meta: {
                rule: 'editor'
            }
        },
    ]
})

export default router;