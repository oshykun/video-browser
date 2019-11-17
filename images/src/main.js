import dotenv from 'dotenv';
import Vue from 'vue';

import router from './router';
import store from './store';
import App from './App';

dotenv.config();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
