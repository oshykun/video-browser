import Vue from 'vue'
import App from './App'
import dotenv from 'dotenv'

dotenv.config()

new Vue({
  render: h => h(App)
}).$mount('#app')
