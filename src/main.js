import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
