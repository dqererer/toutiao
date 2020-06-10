import Vue from 'vue'
import router from './router';
import App from './App.vue';
import store from './vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './css/common.css';
import './assets/font_1589564_1rnaz9mxso/iconfont.css'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
