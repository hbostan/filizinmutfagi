import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
