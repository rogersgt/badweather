import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import attachFastClick from 'fastclick';
import Element from 'element-ui'
import home from './components/home.vue';
import contact from './components/contact.vue';
import shows from './components/shows.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
   },
   {
     path: '/contact',
     component: contact,
     name: 'contact'
   },
   {
    path: '/shows',
    component: shows,
    name: 'shows'
  },
   {
     path: '*',
     redirect: '/'
   }
];


const router = new VueRouter({
  routes,
  history: true,
  hashband: false
});

const app = new Vue({
  router
}).$mount('#app');

attachFastClick(document.body);
