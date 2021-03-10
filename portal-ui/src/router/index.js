import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const publicPath = '/portal-ui'

const routes = [
    {
        path: publicPath,
        redirect: `${publicPath}/dashboard`,
    },
    {
        path: `${publicPath}/dashboard`,
        component: () => import(/* webpackChunkName: 'dashboard' */ '../components/dashboard'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
})

export default router