import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import attachFastClick from 'fastclick';
import vide from 'vide';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vide);

const routes = [
  {
    path: '/',
    component: require('./home/home.vue'),
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
