import Vue from 'vue'
import App from './App.vue'
import VueTable from '@lossendae/vue-table'

// install globally...
Vue.use('vue-table', VueTable)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
