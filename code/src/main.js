import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import App from './App.vue'

Vue.use(BootstrapVue)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
