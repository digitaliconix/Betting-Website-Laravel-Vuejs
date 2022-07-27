import Vue from 'vue'
import { ToastPlugin } from 'bootstrap-vue'

// require('@core/scss/core.scss')

require('@core/scss/vue/libs/vue-good-table.scss')

// import assets styles
require('@/assets/scss/style.scss')

import '@/libs/toastification'

Vue.use(ToastPlugin)

new Vue({
    components: {
        'app_form': require('./AppForm.vue').default,
    }
}).$mount('#app_form');
