import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import attachFastClick from 'fastclick';
import Element from 'element-ui'
import vide from 'vide';
import $ from 'jquery';
 
import home from './home/home.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);
Vue.use(vide);
Vue.use(() => { window.$ = window.jQuery = $; });

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
   }
];


const router = new VueRouter({
  routes,
  history: true
});

router.push('/');

const app = new Vue({
  router
}).$mount('#app');

attachFastClick(document.body);
