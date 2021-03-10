import './public-path'
import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(ElementUi)
Vue.config.productionTip = false

let instance = null
function render(props = {}){
  const {container} = props
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#vue-app') : '#vue-app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}