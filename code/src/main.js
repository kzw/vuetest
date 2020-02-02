import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

import router from './router'
import App from './App.vue'

import './custom.scss'
Vue.use(BootstrapVue)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
