import Vue from 'vue';
import VueRouter from 'vue-router';
import Recipies from '../components/Recipies.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Recipies',
    component: Recipies,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
