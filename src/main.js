import Vue from 'vue'
import App from './views/app/App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/styles/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
