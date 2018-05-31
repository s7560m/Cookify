// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueRouter from 'vue-router';
import Prompt from './components/Prompt'
import Cookify from './components/Cookify'

Vue.use(VueRouter);
Vue.config.productionTip = false
/* eslint-disable no-new */

const routes = [
  { path: '/', component: Prompt },
  { path: '/cookify', component: Cookify }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
