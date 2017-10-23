import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import fastClick from 'fastclick';
import home from './components/home.vue';
import contact from './components/contact.vue';
import shows from './components/shows.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(() => {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastClick.attach(document.body);
    }, false);
  }
});

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
