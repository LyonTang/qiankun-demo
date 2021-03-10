import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: 'dashboard' */ '../components/dashboard'),
    },
    {
        path: '/tag',
        component: () => import(/* webpackChunkName: 'tag' */ '../components/tag'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/child-vue-app' : '/vue-app',
    routes,
})

export default router