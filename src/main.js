import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import router from './router.js'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-dark.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})

