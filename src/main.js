import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { welcomeMsg, taskDone } from './constants'
import hiMsg from './utils'

new Vue({
  render: h => h(App),
}).$mount('#app')

hiMsg(welcomeMsg);
hiMsg(taskDone);