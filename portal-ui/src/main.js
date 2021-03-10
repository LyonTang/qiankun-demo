import Vue from 'vue'
import App from './App.vue'
import {registerMicroApps, start} from 'qiankun'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'vue-app',
    entry: process.env.NODE_ENV === 'development'
      ? '//localhost:18081/vue-app'
      : '/vue-app',
    container: '#micro-app',
    activeRule: '/child-vue-app',
  }
])

start()