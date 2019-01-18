import Vue from 'vue'
// Application imports
import App from './App'
import router from '@/router'
import store from '@/store'
// Plugins
import './plugins'
import '@/styles/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
