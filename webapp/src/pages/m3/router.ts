import Vue from 'vue';
import Router from 'vue-router';
import Hello from './views/Hello.vue';
import About from '../m2/views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/',
      name: 'hello',
      component: Hello,
    },
  ],
});
