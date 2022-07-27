import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.component('care_giver', require('./App.vue').default)

import router from './router'
import store from '../store'
import  '@/libs/sweet-alerts'

// Global Components
import '../global-components'
import '../libs/filters'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')


require('@core/scss/vue/libs/vue-good-table.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
}).$mount('#care_giver')
