import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = []
for (const component of [Home]) {
  for (const path of component.paths) routes.push({ path, component })
}

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes })
