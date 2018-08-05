// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './stylus/reset.styl'
import './assets/utils/rem.js'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Toast } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import './common/stylus/index.styl'
import store from './store'

Vue.use(VueLazyload)
Vue.use(Mint);
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
