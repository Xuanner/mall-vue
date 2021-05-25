import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/content/toast'

Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
