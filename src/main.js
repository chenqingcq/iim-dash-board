// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import md5 from 'js-md5';
import iView from 'iview';

import App from './App';
import router from './router';
import store from '@/store';
import ebus from '@/utils/ebus';
import 'lib-flexible/flexible.js';

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.prototype.$md5 = md5;
Vue.prototype.$ebus = ebus;
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
