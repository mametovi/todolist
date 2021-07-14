import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar'
import moment from 'moment';


Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/style.css'


Vue.prototype.$moment = moment;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VCalendar, {
  firstDayOfWeek: 2, // ...other defaults,
  formats: {
      title: 'MMM YY',
      weekdays: 'WW',
      navMonths: 'MMMM',
      input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
      dayPopover: 'L'
  },
  datePickerShowDayPopover: false,
  popoverExpanded: true,
  popoverDirection: 'bottom'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
