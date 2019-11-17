import dotenv from 'dotenv';
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';

import router from './router';
import store from './store';
import App from './App';

dotenv.config();

Vue.use(SuiVue);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
