import Vue from 'vue'
import App from './App.vue'
import Picker from './lib/picker.js'
Vue.use(Picker)
new Vue({
  el: '#app',
  render: h => h(App)
})
